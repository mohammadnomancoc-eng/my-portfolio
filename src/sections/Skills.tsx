import { useState } from "react";
import { Keyboard3D } from "../components/keyboard/3DKeyboard";
import { KeyboardKey } from "../components/keyboard/keyboard-config";

export default function Skills() {
  const [selectedKey, setSelectedKey] = useState<KeyboardKey | null>(null);

  return (
    <section id="skills" className="scroll-mt-28 relative w-full min-h-[750px] bg-[#0a0a0f] overflow-hidden flex flex-col items-center justify-start pt-10 pb-6 rounded-2xl my-8 border border-white/10 shadow-2xl">
      <div className="text-center mb-6 z-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Tech Stack</h2>
        {selectedKey ? (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 shadow-lg backdrop-blur-md transition-all duration-200 animate-fadeIn">
            <span
              className="w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]"
              style={{ backgroundColor: selectedKey.color, color: selectedKey.color }}
            />
            <span className="font-semibold text-white text-sm sm:text-base">
              {selectedKey.label}
            </span>
            <span className="text-gray-400 text-xs sm:text-sm">
              — {selectedKey.shortDescription}
            </span>
          </div>
        ) : (
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Hover, click, or type on your keyboard to explore 24 tech skills
          </p>
        )}
      </div>
      <div className="relative w-full h-[540px] sm:h-[600px] flex-1 flex items-center justify-center">
        <Keyboard3D
          soundAssetPath="/assets/keycap-sounds"
          section="skills"
          onKeySelect={(key) => setSelectedKey(key)}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
