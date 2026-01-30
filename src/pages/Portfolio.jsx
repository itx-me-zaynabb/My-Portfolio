import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Briefcase,
  ReactLogo,
  NestLogo,
  Zap,
} from "../components/Icons"; // Replace with your icon imports
import Footer from "../components/Footer";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Update cursor and mouse positions
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:zainabfattimaa@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const navItems = [
    { label: "Home", value: "home", icon: "🏠" },
    { label: "About", value: "about", icon: "👤" },
    { label: "Projects", value: "projects", icon: "💼" },
    { label: "Contact", value: "contact", icon: "📬" },
  ];

  const projects = [
    {
      title: "💬 Live Chat Application",
      description:
        "A real-time chat system with multiple user support, message broadcasting, and online status updates.",
      tech: ["HTML", "JavaScript", "NestJS", "Socket.IO"],
      highlights: [
        "Real-time Messaging",
        "Online Status",
        "Message Broadcasting",
      ],
    },
    {
      title: "🏫 University Management System",
      description:
        "Full stack application for managing students, courses, and faculty data with real-time notifications.",
      tech: ["React.js", "NestJS", "MongoDB", "Socket.IO"],
      highlights: ["Real-time Updates", "Full CRUD", "Notifications"],
    },
    {
      title: "🎬 Krijo Films",
      description:
        "Modern movie-themed web application with SPA routing and interactive UI.",
      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "Formik",
        "Yup",
      ],
      highlights: ["SPA Routing", "Form Validation", "Interactive UI"],
    },
    {
      title: "☁ Weather App",
      description:
        "Real-time weather data display with dynamic weather details and API integration.",
      tech: ["React.js", "Axios API"],
      highlights: ["API Integration", "Real-time Data", "Dynamic UI"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Embedded global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; cursor: none; }
        h1,h2,h3,h4,h5,h6 { font-family: 'Space Grotesk', sans-serif; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }

        /* Advanced Custom Cursor */
        .custom-cursor { position: fixed; pointer-events: none; z-index: 9999; width: 32px; height: 32px; transform: translate(-50%, -50%); }
        .custom-cursor .cursor-pointer { position: absolute; top: 0; left: 0; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 10px solid #ec4899; filter: drop-shadow(0 0 3px rgba(236, 72, 153, 0.8)); animation: pointerPulse 1s ease-in-out infinite; }
        .custom-cursor::before { content: ''; position: absolute; top: 50%; left: 50%; width: 28px; height: 28px; border: 2px solid transparent; border-top: 2px solid #dc2626; border-right: 2px solid #ec4899; border-radius: 50%; transform: translate(-50%, -50%); animation: rotateCursor 2s linear infinite; box-shadow: 0 0 15px rgba(236, 72, 153, 0.6), inset 0 0 10px rgba(220, 38, 38, 0.2); }
        .custom-cursor::after { content: ''; position: absolute; top: 50%; left: 50%; width: 18px; height: 18px; border: 1.5px solid rgba(236, 72, 153, 0.8); border-radius: 50%; transform: translate(-50%, -50%); animation: pulseCursor 1.5s ease-in-out infinite; }

        @keyframes pointerPulse { 0%,100%{ transform: scale(1); filter: drop-shadow(0 0 3px rgba(236, 72, 153, 0.8)); } 50%{ transform: scale(1.1); filter: drop-shadow(0 0 8px rgba(236, 72, 153, 1)); } }
        @keyframes rotateCursor { 0%{ transform: translate(-50%, -50%) rotate(0deg); } 100%{ transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes pulseCursor { 0%,100%{ width:18px;height:18px;opacity:1;box-shadow:0 0 8px rgba(236,72,153,0.8);} 50%{ width:24px;height:24px;opacity:0.6;box-shadow:0 0 15px rgba(236,72,153,0.4);} }

        .cursor-dot { position: fixed; pointer-events: none; z-index: 10000; width:6px; height:6px; background: linear-gradient(135deg, #dc2626, #ec4899); border-radius:50%; transform: translate(-50%, -50%); box-shadow:0 0 12px rgba(236,72,153,0.9),0 0 20px rgba(220,38,38,0.6); animation: dotGlow 1s ease-in-out infinite; }
        @keyframes dotGlow { 0%,100%{ box-shadow:0 0 12px rgba(236,72,153,0.9),0 0 20px rgba(220,38,38,0.6); } 50%{ box-shadow:0 0 18px rgba(236,72,153,1),0 0 30px rgba(220,38,38,0.8); } }
      `}</style>

      {/* Custom Cursor */}
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

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm z-50 py-4 px-8 flex justify-between items-center">
        <h1 className="text-red-400 font-bold text-xl">Zainab Fatima</h1>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li
              key={item.value}
              className={`cursor-pointer ${currentPage === item.value ? "text-red-400 font-semibold" : "text-gray-400 hover:text-red-400"} transition`}
              onClick={() => setCurrentPage(item.value)}
            >
              {item.icon} {item.label}
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-28">
        {/* Render Pages */}
        {currentPage === "home" && (
          <div className="min-h-screen flex flex-col justify-center items-center animate-fadeInUp">
            <h1 className="text-6xl font-bold mb-6 text-red-400">
              Hi, I’m Zainab Fatima
            </h1>
            <p className="text-gray-300 text-xl text-center max-w-xl">
              A Junior Frontend React Developer passionate about creating
              responsive and interactive web applications.
            </p>
          </div>
        )}

        {currentPage === "about" && (
          <div className="min-h-screen py-12 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-white mb-6 text-center">
              About Me
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-4">
              I'm a passionate Junior Frontend React Developer with hands-on
              experience building responsive, high-performance web
              applications...
            </p>
            {/* Add skills, languages, etc. */}
          </div>
        )}

        {currentPage === "projects" && (
          <div className="min-h-screen py-12 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-white mb-6 text-center">
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 border border-red-600/20 rounded-lg p-6 hover:border-red-600/50 transition-all"
                >
                  <h3 className="text-xl font-bold text-red-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-gray-400 text-xs border border-red-600/20 px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === "contact" && (
          <div className="min-h-screen py-12 animate-fadeInUp">
            <h2 className="text-5xl font-bold text-white mb-6 text-center">
              Contact Me
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-400 rounded text-center">
                Thank you! I will get back to you soon.
              </div>
            )}

            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col max-w-2xl mx-auto gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="p-3 rounded-lg bg-gray-900 border border-red-600/30 text-white focus:outline-none focus:border-red-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="p-3 rounded-lg bg-gray-900 border border-red-600/30 text-white focus:outline-none focus:border-red-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleFormChange}
                rows="5"
                required
                className="p-3 rounded-lg bg-gray-900 border border-red-600/30 text-white focus:outline-none focus:border-red-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
