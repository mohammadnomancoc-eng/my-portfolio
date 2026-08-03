import keysData from "./keyboard-keys.json";

export interface KeyboardKey {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
}

export const KEYBOARD_KEYS: Record<string, KeyboardKey> = keysData.reduce(
  (acc, key) => {
    acc[key.name] = key;
    return acc;
  },
  {} as Record<string, KeyboardKey>
);

export type Section = "hero" | "about" | "skills" | "experience" | "projects" | "contact";

export const KEYBOARD_3D_TRANSFORMS = {
  hero: {
    desktop: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 225, y: -100, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
    mobile: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 6, z: 0 },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
    mobile: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: 150, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 350, y: -250, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: 150, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
};

export const getKeyboardState = ({
  section = "hero",
  isMobile = false,
}: {
  section?: Section;
  isMobile?: boolean;
}) => {
  const baseTransform =
    KEYBOARD_3D_TRANSFORMS[section as keyof typeof KEYBOARD_3D_TRANSFORMS]?.[
      isMobile ? "mobile" : "desktop"
    ] || KEYBOARD_3D_TRANSFORMS.hero[isMobile ? "mobile" : "desktop"];

  const getScaleOffset = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    const DESKTOP_REF_WIDTH = 1280;
    const MOBILE_REF_WIDTH = 390;

    const targetScale = isMobile
      ? width / MOBILE_REF_WIDTH
      : width / DESKTOP_REF_WIDTH;

    const minScale = 0.5;
    const maxScale = isMobile ? 0.6 : 1.15;

    return Math.min(Math.max(targetScale, minScale), maxScale);
  };

  const scaleOffset = getScaleOffset();

  return {
    ...baseTransform,
    scale: {
      x: Math.abs(baseTransform.scale.x * scaleOffset),
      y: Math.abs(baseTransform.scale.y * scaleOffset),
      z: Math.abs(baseTransform.scale.z * scaleOffset),
    },
  };
};
