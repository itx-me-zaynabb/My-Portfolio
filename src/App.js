import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />

      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className="relative z-10 pt-16">
        {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === "about" && <About />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "portfolio" && <Portfolio />}
        {currentPage === "contact" && <Contact />}
      </div>

      <Footer />
    </div>
  );
}
