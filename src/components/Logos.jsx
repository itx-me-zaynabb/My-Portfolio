import React from "react";

/* ⚡ Zap (Tools / Energy Icon) */
export const Zap = () => (
  <div
    className="w-10 h-10 rounded-full flex items-center justify-center
    bg-gradient-to-br from-yellow-400 to-orange-500
    text-white font-bold shadow-lg shadow-yellow-500/40
    animate-pulse-glow"
  >
    ⚡
  </div>
);

/* ⚛️ React Logo */
export const ReactLogo = ({ size = "md" }) => {
  const sizeClass = size === "sm" ? "w-7 h-7" : "w-10 h-10";
  return (
    <div
      className={`${sizeClass} flex items-center justify-center
      text-blue-400 animate-spin`}
      style={{ animationDuration: "6s" }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.5"
          transform="rotate(120 12 12)"
        />
      </svg>
    </div>
  );
};

/* 🟥 NestJS Logo */
export const NestLogo = ({ size = "md" }) => {
  const sizeClass = size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm";
  return (
    <div
      className={`${sizeClass}
      bg-gradient-to-br from-red-600 to-pink-500
      rounded-full flex items-center justify-center
      text-white font-bold shadow-lg shadow-red-600/40
      animate-float`}
    >
      Nest
    </div>
  );
};

/* 🟨 JavaScript Logo */
export const JavaScriptLogo = ({ size = "md" }) => {
  const sizeClass = size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm";
  return (
    <div
      className={`${sizeClass}
      bg-yellow-400 text-black font-bold
      rounded-lg flex items-center justify-center
      shadow-lg shadow-yellow-400/40
      hover:scale-110 transition-transform duration-300`}
    >
      JS
    </div>
  );
};

/* 🌊 Tailwind CSS Logo */
export const TailwindLogo = ({ size = "md" }) => {
  const sizeClass = size === "sm" ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm";
  return (
    <div
      className={`${sizeClass}
      bg-gradient-to-br from-cyan-400 to-sky-500
      rounded-lg flex items-center justify-center
      text-white font-bold
      shadow-lg shadow-cyan-400/40
      animate-pulse`}
    >
      TW
    </div>
  );
};
