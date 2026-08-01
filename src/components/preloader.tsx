import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Animation sequence:
// 1. Cursor blinks → types "npm run dev" → Enter
// 2. Cursor blinks on new line → "› compiling modules…" appears
// 3. "✓ assets optimized" appears
// 4. "● generating bundles" appears + progress bar animates → done

const STEPS = [
  { type: 'input', text: 'npm run dev', delay: 600 }, // typing phase
  { type: 'muted', text: '› compiling modules…', delay: 500 }, // after enter
  { type: 'ok', text: '✓ assets optimized', delay: 800 },
  { type: 'run', text: '● site loading', delay: 700 },
  { type: 'done', text: '', delay: 900 }, // progress bar done
];

const TYPE_SPEED = 55; // ms per character

type LineItem = {
  type: string;
  text: string;
};

const Preloader = () => {
  const [phase, setPhase] = useState(0); // which STEPS entry we're on
  const [typed, setTyped] = useState(''); // for the typing effect on step 0
  const [showCursor, setShowCursor] = useState(true);
  const [lines, setLines] = useState<LineItem[]>([]); // committed lines
  const [progressDone, setProgressDone] = useState(false);
  const [fading, setFading] = useState(false);
  const [loading, setLoading] = useState(true);

  // Blinking cursor toggle
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Main sequencer
  useEffect(() => {
    if (phase >= STEPS.length) return;

    const step = STEPS[phase];

    if (step.type === 'input') {
      // Initial blink pause, then type character by character
      let charIndex = 0;
      const blinkPause = setTimeout(() => {
        const typeInterval = setInterval(() => {
          charIndex++;
          setTyped(step.text.slice(0, charIndex));
          if (charIndex === step.text.length) {
            clearInterval(typeInterval);
            // Simulate Enter — commit the line, move to next phase
            setTimeout(() => {
              setLines([{ type: 'input', text: step.text }]);
              setTyped('');
              setPhase(1);
            }, 400);
          }
        }, TYPE_SPEED);
      }, step.delay);
      return () => clearTimeout(blinkPause);
    } else if (step.type === 'done') {
      const t = setTimeout(() => {
        setProgressDone(true);
        setPhase(phase + 1);
      }, step.delay);
      return () => clearTimeout(t);
    } else {
      // Regular lines — appear after delay
      const t = setTimeout(() => {
        setLines((prev) => [...prev, { type: step.type, text: step.text }]);
        setPhase(phase + 1);
      }, step.delay);
      return () => clearTimeout(t);
    }
  }, [phase]);

  // Fade out & unmount once animation is complete
  useEffect(() => {
    if (progressDone) {
      const fadeTimer = setTimeout(() => {
        setFading(true);
        window.dispatchEvent(new CustomEvent('preloader-finished'));
      }, 700);

      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 1200);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progressDone]);

  if (!loading) return null;

  const isTyping = phase === 0; // still on input phase
  const isWaiting = phase > 0 && phase < STEPS.length; // cursor visible between steps
  const isDone = phase >= STEPS.length;

  return (
    <Overlay $fading={fading}>
      <StyledWrapper>
        <div className="ui-loader term" role="status" aria-label="Loading">
          <div className="term-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <div className="term-title">dev server</div>
          </div>
          <div className="term-body">
            {/* Committed lines */}
            {lines.map((line, i) => (
              <div className="line" key={i}>
                {line.type === 'input' && (
                  <>
                    <b>$ </b>
                    {line.text}
                  </>
                )}
                {line.type === 'muted' && (
                  <span className="muted">{line.text}</span>
                )}
                {line.type === 'ok' && (
                  <>
                    <span className="tag ok">✓</span>
                    {line.text.replace('✓ ', '')}
                  </>
                )}
                {line.type === 'run' && (
                  <>
                    <span className="tag run">●</span>
                    {line.text.replace('● ', '')}
                  </>
                )}
              </div>
            ))}

            {/* Active typing line (phase 0) */}
            {isTyping && (
              <div className="line">
                <b>$ </b>
                {typed}
                <span
                  className={`cursor-block ${showCursor ? 'visible' : ''}`}
                  aria-hidden="true"
                />
              </div>
            )}

            {/* Waiting cursor between steps */}
            {isWaiting && !isDone && (
              <div className="line">
                <span
                  className={`cursor-block ${showCursor ? 'visible' : ''}`}
                  aria-hidden="true"
                />
              </div>
            )}

            {/* Progress bar — shown after "generating bundles" line appears */}
            {lines.some((l) => l.type === 'run') && (
              <div className={`progress ${progressDone ? 'done' : ''}`}>
                <span className="fill" />
                <span className="glint" aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
      </StyledWrapper>
    </Overlay>
  );
};

const Overlay = styled.div<{ $fading: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #09090b;
  opacity: ${(props) => (props.$fading ? 0 : 1)};
  pointer-events: ${(props) => (props.$fading ? 'none' : 'auto')};
  transition: opacity 0.5s ease-in-out;
`;

const StyledWrapper = styled.div`
  .ui-loader {
    width: 340px;
    max-width: calc(100vw - 32px);
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.55);
    overflow: hidden;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    position: relative;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }

  .term-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.03)
    );
  }
  .term-bar .dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
  }
  .term-title {
    margin-left: auto;
    font: 700 12px/1 ui-sans-serif, system-ui;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 0.2px;
  }

  .term-body {
    padding: 14px 14px 16px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    line-height: 1.55;
    min-height: 100px;
  }

  .line {
    margin: 6px 0;
    display: flex;
    align-items: center;
  }
  .line b {
    color: rgba(255, 255, 255, 0.92);
    margin-right: 4px;
  }
  .muted {
    color: rgba(255, 255, 255, 0.6);
  }

  .tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 6px;
    margin-right: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.04);
    font-weight: 800;
    font-size: 11px;
    flex-shrink: 0;
  }
  .tag.ok  { box-shadow: 0 0 22px rgba(110, 231, 255, 0.12); }
  .tag.run { box-shadow: 0 0 22px rgba(176, 140, 255, 0.12); }

  /* Blinking block cursor */
  .cursor-block {
    display: inline-block;
    width: 8px;
    height: 14px;
    margin-left: 2px;
    border-radius: 2px;
    background: linear-gradient(
      135deg,
      rgba(110, 231, 255, 0.95),
      rgba(176, 140, 255, 0.85)
    );
    opacity: 0;
    transition: opacity 0.1s;
    vertical-align: middle;
  }
  .cursor-block.visible {
    opacity: 0.75;
  }

  /* Progress bar */
  .progress {
    margin-top: 12px;
    height: 8px;
    border-radius: 999px;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.09);
  }

  /* Flowing animation while loading */
  .fill {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(110, 231, 255, 0),
      rgba(110, 231, 255, 0.55),
      rgba(176, 140, 255, 0.55),
      rgba(110, 231, 255, 0)
    );
    transform: translateX(-75%);
    animation: flow 1.05s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  }
  .glint {
    position: absolute;
    inset: -30% -40%;
    background: linear-gradient(
      110deg,
      transparent 0%,
      rgba(255, 255, 255, 0.12) 22%,
      rgba(255, 255, 255, 0.28) 28%,
      transparent 40%
    );
    transform: translateX(-55%);
    animation: glint 1.05s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
    mix-blend-mode: screen;
  }

  /* When done — fill to 100% and stop */
  .progress.done .fill {
    animation: none;
    transform: translateX(0%);
    background: linear-gradient(
      90deg,
      rgba(110, 231, 255, 0.6),
      rgba(176, 140, 255, 0.6)
    );
    transition: transform 0.6s ease;
  }
  .progress.done .glint {
    animation: none;
    opacity: 0;
  }

  @keyframes flow {
    0%   { transform: translateX(-75%); opacity: 0.55; }
    50%  { opacity: 1; }
    100% { transform: translateX(75%);  opacity: 0.55; }
  }
  @keyframes glint {
    0%   { transform: translateX(-60%); opacity: 0; }
    20%  { opacity: 1; }
    100% { transform: translateX(60%);  opacity: 0; }
  }
`;

export default Preloader;