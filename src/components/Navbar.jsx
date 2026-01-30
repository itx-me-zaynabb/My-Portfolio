// src/components/Navbar.jsx
import React from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({
  currentPage,
  setCurrentPage,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const navItems = [
    { label: "Home", value: "home", icon: "🏠" },
    { label: "About", value: "about", icon: "👤" },
    { label: "Projects", value: "projects", icon: "💼" },
    { label: "Contact", value: "contact", icon: "📬" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-red-900/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage("home")}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-pink-500 rounded-lg flex items-center justify-center font-bold text-white hover:shadow-lg hover:shadow-red-600/50 transition-all">
              ZF
            </div>
            <span className="text-white font-bold hidden sm:inline">
              Zainab
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-sm font-medium transition-colors relative ${
                  currentPage === item.value
                    ? "text-red-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                {currentPage === item.value && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-pink-500 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-red-400 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeInDown space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setCurrentPage(item.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded transition ${
                  currentPage === item.value
                    ? "bg-red-600/20 text-red-400"
                    : "text-gray-300 hover:text-red-400"
                }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
