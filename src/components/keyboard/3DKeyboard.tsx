import React, { useEffect, useState, useRef } from "react";
import {
  KEYBOARD_KEYS,
  KeyboardKey,
  Section,
} from "./keyboard-config";
import keysData from "./keyboard-keys.json";
import { useKeyboardSounds } from "./use-keyboard-sounds";

export interface Keyboard3DProps {
  sceneUrl?: string;
  soundAssetPath?: string;
  section?: Section;
  onKeySelect?: (key: KeyboardKey | null) => void;
  className?: string;
}

export const Keyboard3D: React.FC<Keyboard3DProps> = ({
  soundAssetPath = "/assets/keycap-sounds",
  onKeySelect,
  className = "w-full h-full relative pointer-events-auto flex items-center justify-center",
}) => {
  const [activeKeyName, setActiveKeyName] = useState<string | null>(null);
  const [pressedKeyName, setPressedKeyName] = useState<string | null>(null);
  const [failedIcons, setFailedIcons] = useState<Record<string, boolean>>({});
  const [tilt, setTilt] = useState({ x: 18, y: -4 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { playPressSound, playReleaseSound } = useKeyboardSounds(soundAssetPath);

  const keysList: KeyboardKey[] = keysData as KeyboardKey[];
  const row1 = keysList.slice(0, 5);
  const row2 = keysList.slice(5, 10);
  const row3 = keysList.slice(10, 15);
  const row4 = keysList.slice(15, 20);
  const row5 = keysList.slice(20, 24);

  const rows = [row1, row2, row3, row4, row5];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: 18 - (y / rect.height) * 12,
      y: -4 + (x / rect.width) * 14,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 18, y: -4 });
    setActiveKeyName(null);
    onKeySelect?.(null);
  };

  const handleKeyHover = (key: KeyboardKey) => {
    if (activeKeyName !== key.name) {
      playPressSound();
      setActiveKeyName(key.name);
      onKeySelect?.(key);
    }
  };

  const handleKeyClick = (key: KeyboardKey) => {
    playPressSound();
    setPressedKeyName(key.name);
    setActiveKeyName(key.name);
    onKeySelect?.(key);
    setTimeout(() => {
      setPressedKeyName(null);
      playReleaseSound();
    }, 150);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          (activeEl as HTMLElement).isContentEditable)
      ) {
        return;
      }

      const keyIndex = (e.key.charCodeAt(0) + e.keyCode) % keysList.length;
      const targetKey = keysList[keyIndex];
      if (targetKey) {
        setPressedKeyName(targetKey.name);
        setActiveKeyName(targetKey.name);
        onKeySelect?.(targetKey);
        playPressSound();
      }
    };

    const handleKeyUp = () => {
      setPressedKeyName(null);
      playReleaseSound();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keysList, onKeySelect, playPressSound, playReleaseSound]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${className} perspective-1000 overflow-visible select-none py-6 px-2 flex flex-col items-center justify-center`}
      style={{ perspective: "1200px" }}
    >
      {/* 3D Keyboard Base / Enclosure */}
      <div
        className="relative transition-transform duration-300 ease-out p-3 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-black border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] flex flex-col items-center gap-2 sm:gap-3 md:gap-4 max-w-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Subtle Keyboard Brand Accent & RGB Glow Under Base */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 rounded-3xl blur-xl -z-10 opacity-60 pointer-events-none" />

        {/* Keyboard Header Plate Bar */}
        <div
          className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-black border border-white/10 text-xs text-gray-400 mb-1"
          style={{ transform: "translateZ(10px)" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs text-gray-300 uppercase tracking-wider">
              TECH STACK 60% MECHANICAL KEYBOARD
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-gray-500">
            <span>24 KEYS</span>
            <span>•</span>
            <span className="text-cyan-400">RGB LED</span>
          </div>
        </div>

        {/* Keycap Matrix Rows */}
        <div
          className="flex flex-col gap-1.5 sm:gap-2.5 md:gap-3.5 items-center w-full"
          style={{ transform: "translateZ(20px)" }}
        >
          {rows.map((rowKeys, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 w-full"
            >
              {rowKeys.map((key) => {
                const isActive = activeKeyName === key.name;
                const isPressed = pressedKeyName === key.name;

                return (
                  <button
                    key={key.name}
                    onMouseEnter={() => handleKeyHover(key)}
                    onClick={() => handleKeyClick(key)}
                    className="relative group transition-all duration-150 ease-out outline-none focus:outline-none"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isPressed
                        ? "translateZ(2px) scale(0.96)"
                        : isActive
                        ? "translateZ(18px) scale(1.04)"
                        : "translateZ(10px)",
                    }}
                    title={`${key.label} — ${key.shortDescription}`}
                  >
                    {/* 3D Keycap Bevel & Top Plate Dish Body */}
                    <div
                      className={`
                        keycap-3d
                        w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
                        p-1 sm:p-1.5 md:p-2 cursor-pointer
                        ${isActive ? "is-active" : ""}
                        ${isPressed ? "is-pressed" : ""}
                      `}
                      style={{
                        ["--key-glow" as any]: key.color || "#ffffff",
                        ["--key-glow-shadow" as any]: `${key.color || "#ffffff"}60`,
                      }}
                    >
                      {/* Key LED Underglow Accent */}
                      <div
                        className="absolute inset-0 rounded-xl sm:rounded-2xl transition-opacity duration-200 pointer-events-none z-0"
                        style={{
                          background: `radial-gradient(circle at center, ${key.color}35 0%, transparent 70%)`,
                          opacity: isActive ? 1 : 0.15,
                        }}
                      />

                      {/* Content Container (Icon + Legend) */}
                      <div className="keycap-content relative z-10 flex flex-col items-center justify-center transition-transform duration-100">
                        {/* Keycap Icon */}
                        <div className="w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center mb-0.5 transition-transform duration-200 group-hover:scale-110">
                          {key.icon && !failedIcons[key.name] ? (
                            <img
                              src={key.icon}
                              alt={key.label}
                              className="w-full h-full object-contain filter drop-shadow-md"
                              onError={() => {
                                setFailedIcons((prev) => ({ ...prev, [key.name]: true }));
                              }}
                            />
                          ) : (
                            <span
                              className={`font-black text-base sm:text-lg md:text-xl transition-colors duration-150 group-hover:!text-white ${
                                isActive ? "!text-white" : ""
                              }`}
                              style={{
                                color: isActive ? "#ffffff" : (key.name === "prettier" ? "#f7b93a" : key.color || "#f7b93a"),
                                textShadow: isActive || key.name === "prettier" ? `0 0 10px ${key.color || "#f7b93a"}80` : "none",
                              }}
                            >
                              {key.name === "prettier" ? "P" : key.label.substring(0, 2)}
                            </span>
                          )}
                        </div>

                        {/* Keycap Label Legend */}
                        <span
                          className={`
                            font-sans font-semibold text-[9px] sm:text-[11px] tracking-tight
                            truncate max-w-full px-1 text-center transition-colors duration-150
                            ${isActive ? "!text-white font-bold" : "group-hover:!text-white"}
                          `}
                          style={{
                            color: isActive ? "#ffffff" : key.color || "#e2e8f0",
                            textShadow: isActive ? `0 0 8px ${key.color}` : "none",
                          }}
                        >
                          {key.label}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Spacebar Row */}
        <div
          className="w-full flex items-center justify-center gap-3 pt-2"
          style={{ transform: "translateZ(12px)" }}
        >
          <div className="keycap-3d w-36 sm:w-64 md:w-80 h-9 sm:h-12 flex items-center justify-center px-3 sm:px-4 cursor-pointer">
            <span className="keycap-content text-[10px] sm:text-xs text-gray-300 font-mono uppercase tracking-widest relative z-10">
              {activeKeyName
                ? KEYBOARD_KEYS[activeKeyName]?.label.toUpperCase()
                : "SPACEBAR — HOVER OR PRESS ANY KEY"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard3D;
