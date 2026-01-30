// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";
import {
  JavaScriptLogo,
  ReactLogo,
  NestLogo,
  TailwindLogo,
} from "../components/Logos";

export default function Home({ setCurrentPage }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/20" />
        <div
          className="absolute w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: `${mousePosition.y - 192}px`,
            left: `${mousePosition.x - 192}px`,
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6 animate-fadeInUp">
              <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full">
                <span className="text-red-400 text-sm font-semibold">
                  👋 Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-red-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Zainab
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Junior Frontend React Developer crafting beautiful, responsive
                web applications with modern JavaScript and cutting-edge UI
                frameworks.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setCurrentPage("projects")}
                  className="group px-8 py-3 bg-gradient-to-r from-red-600 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  View My Work
                  <ExternalLink
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="px-8 py-3 border border-red-600/50 text-red-400 font-semibold rounded-lg hover:bg-red-600/10 transition-all"
                >
                  Get in Touch
                </button>
              </div>

              <div className="flex gap-4 pt-8">
                <a
                  href="https://github.com/itx-me-zaynabb"
                  className="group p-3 bg-gray-900 rounded-lg hover:bg-red-600/20 border border-gray-800 hover:border-red-600/50 transition-all"
                >
                  <Github
                    size={20}
                    className="text-gray-400 group-hover:text-red-400 transition"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/itx-me-zaynabb"
                  className="group p-3 bg-gray-900 rounded-lg hover:bg-red-600/20 border border-gray-800 hover:border-red-600/50 transition-all"
                >
                  <Linkedin
                    size={20}
                    className="text-gray-400 group-hover:text-red-400 transition"
                  />
                </a>
                <a
                  href="mailto:zainabfattimaa@gmail.com"
                  className="group p-3 bg-gray-900 rounded-lg hover:bg-red-600/20 border border-gray-800 hover:border-red-600/50 transition-all"
                >
                  <Mail
                    size={20}
                    className="text-gray-400 group-hover:text-red-400 transition"
                  />
                </a>
              </div>
            </div>

            {/* Right Animated Logos */}
            <div className="relative h-96 hidden md:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div
                  className="absolute inset-0 border-2 border-transparent border-t-red-600 border-r-pink-500 rounded-full animate-spin"
                  style={{ animationDuration: "8s" }}
                />
                <div
                  className="absolute inset-4 border border-transparent border-t-pink-500 border-r-red-600 rounded-full animate-spin"
                  style={{ animationDuration: "-6s" }}
                />
                <div className="absolute inset-8 border border-red-600/10 rounded-full animate-pulse" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-red-600/20 to-pink-500/20 rounded-full flex items-center justify-center border border-red-600/30 backdrop-blur-sm animate-pulse-glow">
                    <Code2 size={80} className="text-red-400" />
                  </div>
                </div>

                <div className="absolute inset-0 animate-rotateLogos">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4">
                    <JavaScriptLogo />
                  </div>
                  <div className="absolute right-1/4 top-1/4">
                    <ReactLogo />
                  </div>
                  <div className="absolute bottom-1/4 right-0 -translate-x-1/4">
                    <NestLogo />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4">
                    <TailwindLogo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
