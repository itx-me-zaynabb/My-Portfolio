import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Advanced Custom Cursor with Pointer */}
      <div
        className="custom-cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      >
        <div className="cursor-pointer" />
      </div>
      <div
        className="cursor-dot"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Cursor Styles */}
      <style>{`
        .custom-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          width: 32px;
          height: 32px;
          transform: translate(-50%, -50%);
        }

        .custom-cursor .cursor-pointer {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid #ec4899;
          filter: drop-shadow(0 0 3px rgba(236, 72, 153, 0.8));
          animation: pointerPulse 1s ease-in-out infinite;
        }

        .custom-cursor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 28px;
          height: 28px;
          border: 2px solid transparent;
          border-top: 2px solid #dc2626;
          border-right: 2px solid #ec4899;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: rotateCursor 2s linear infinite;
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.6), inset 0 0 10px rgba(220, 38, 38, 0.2);
        }

        .custom-cursor::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 18px;
          height: 18px;
          border: 1.5px solid rgba(236, 72, 153, 0.8);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulseCursor 1.5s ease-in-out infinite;
        }

        .cursor-dot {
          position: fixed;
          pointer-events: none;
          z-index: 10000;
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #dc2626, #ec4899);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 12px rgba(236, 72, 153, 0.9), 0 0 20px rgba(220, 38, 38, 0.6);
          animation: dotGlow 1s ease-in-out infinite;
        }

        @keyframes pointerPulse {
          0%, 100% { 
            filter: drop-shadow(0 0 3px rgba(236, 72, 153, 0.8));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(236, 72, 153, 1));
            transform: scale(1.1);
          }
        }

        @keyframes rotateCursor {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes pulseCursor {
          0%, 100% { 
            width: 18px;
            height: 18px;
            box-shadow: 0 0 8px rgba(236, 72, 153, 0.8);
            opacity: 1;
          }
          50% {
            width: 24px;
            height: 24px;
            box-shadow: 0 0 15px rgba(236, 72, 153, 0.4);
            opacity: 0.6;
          }
        }

        @keyframes dotGlow {
          0%, 100% { 
            box-shadow: 0 0 12px rgba(236, 72, 153, 0.9), 0 0 20px rgba(220, 38, 38, 0.6);
          }
          50% {
            box-shadow: 0 0 18px rgba(236, 72, 153, 1), 0 0 30px rgba(220, 38, 38, 0.8);
          }
        }
      `}</style>
    </>
  );
}
