import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-red-600/20 py-8 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Zainab Fatima. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/itx-me-zaynabb"
              className="text-gray-400 hover:text-red-400 transition text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/itx-me-zaynabb"
              className="text-gray-400 hover:text-red-400 transition text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:zainabfattimaa@gmail.com"
              className="text-gray-400 hover:text-red-400 transition text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
