import { useCallback, useEffect, useRef } from "react";

export const useKeyboardSounds = (soundAssetPath: string = "/assets/keycap-sounds") => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const pressBufferRef = useRef<AudioBuffer | null>(null);
  const releaseBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const loadSound = async () => {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;

        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        const pressRes = await fetch(`${soundAssetPath}/press.mp3`);
        const pressBuffer = await pressRes.arrayBuffer();
        pressBufferRef.current = await ctx.decodeAudioData(pressBuffer);

        const releaseRes = await fetch(`${soundAssetPath}/release.mp3`);
        const releaseBuffer = await releaseRes.arrayBuffer();
        releaseBufferRef.current = await ctx.decodeAudioData(releaseBuffer);
      } catch (error) {
        console.error("Failed to load keycap sound effects", error);
      }
    };

    loadSound();

    return () => {
      audioContextRef.current?.close();
    };
  }, [soundAssetPath]);

  const getContext = useCallback(() => {
    if (audioContextRef.current?.state === "suspended") {
      audioContextRef.current.resume().catch(() => {});
    }
    return audioContextRef.current;
  }, []);

  const playSoundBuffer = useCallback(
    (buffer: AudioBuffer | null, baseDetune = 0) => {
      try {
        const ctx = getContext();
        if (!ctx || !buffer) return;

        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.detune.value = baseDetune + Math.random() * 200 - 100;

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.4;

        source.connect(gainNode);
        gainNode.connect(ctx.destination);

        source.start(0);
      } catch (err) {
        console.error(err);
      }
    },
    [getContext]
  );

  const playPressSound = useCallback(() => {
    playSoundBuffer(pressBufferRef.current);
  }, [playSoundBuffer]);

  const playReleaseSound = useCallback(() => {
    playSoundBuffer(releaseBufferRef.current);
  }, [playSoundBuffer]);

  return { playPressSound, playReleaseSound };
};
