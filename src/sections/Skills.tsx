import { useState } from "react";
import { Keyboard3D } from "../components/keyboard/3DKeyboard";
import { KeyboardKey } from "../components/keyboard/keyboard-config";

export default function Skills() {
  const [selectedKey, setSelectedKey] = useState<KeyboardKey | null>(null);

  return (
    <section id="skills" className="scroll-mt-28 relative w-full min-h-[520px] sm:min-h-[750px] bg-[#0a0a0f] overflow-hidden flex flex-col items-center justify-start pt-6 sm:pt-10 pb-4 sm:pb-6 rounded-2xl my-4 sm:my-8 border border-white/10 shadow-2xl mx-0">
      <div className="text-center mb-4 sm:mb-6 z-10 px-3 sm:px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">Tech Stack</h2>
        {selectedKey ? (
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20 shadow-lg backdrop-blur-md transition-all duration-200 animate-fadeIn">
            <span
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shadow-[0_0_10px_currentColor]"
              style={{ backgroundColor: selectedKey.color, color: selectedKey.color }}
            />
            <span className="font-semibold text-white text-xs sm:text-base">
              {selectedKey.label}
            </span>
            <span className="text-gray-400 text-[10px] sm:text-sm">
              — {selectedKey.shortDescription}
            </span>
          </div>
        ) : (
          <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
            Hover, click, or type on your keyboard to explore 24 tech skills
          </p>
        )}
      </div>
      <div className="relative w-full h-[420px] sm:h-[600px] flex-1 flex items-center justify-center">
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
