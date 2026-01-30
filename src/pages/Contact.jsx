import React, { useState, useEffect } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse follow effect for subtle background circles
  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000); // auto hide success message
  };

  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: "zainabfattimaa@gmail.com",
      link: "mailto:zainabfattimaa@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/itx-me-zaynabb",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Check my repos",
      link: "https://github.com/itx-me-zaynabb",
    },
  ];

  const infoCards = [
    { label: "Location", value: "Multan, Punjab, Pakistan" },
    { label: "Phone", value: "+92-329-9047554" },
  ];

  return (
    <div className="relative min-h-screen pb-12 bg-black text-white overflow-x-hidden">
      {/* Animated background circles */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse-slow"
          style={{
            top: mousePosition.y - 144,
            left: mousePosition.x - 144,
            transition: "all 0.2s ease-out",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{
            top: mousePosition.y - 192,
            left: mousePosition.x - 192,
            transition: "all 0.2s ease-out",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center animate-fadeInUp">
          <h1 className="text-5xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's talk about it.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-pink-500 rounded-full mx-auto mt-6 animate-glow" />
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactCards.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-gradient-to-br from-gray-900 to-black border border-red-600/20 rounded-lg p-8 text-center overflow-hidden hover:border-red-600/50 transition-all animate-fadeInUp`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Glow circle behind icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-red-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all animate-pulse-fast" />
                </div>
                <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-red-600 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">{contact.label}</h3>
                <p className="text-gray-400 break-all group-hover:text-red-400 transition">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16 animate-fadeInUp">
          {submitted && (
            <div className="mb-6 p-4 bg-green-600/20 border border-green-400 rounded animate-glow">
              Thank you! I will get back to you soon.
            </div>
          )}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-600/20 rounded-lg p-8 shadow-lg hover:shadow-red-600/20 transition-all">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-white font-semibold mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleFormChange}
                    required
                    placeholder={`Your ${field}`}
                    className="w-full px-4 py-3 bg-black border border-red-600/30 rounded-lg text-white placeholder-gray-600 focus:border-red-600 focus:outline-none transition"
                  />
                </div>
              ))}

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="6"
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-black border border-red-600/30 rounded-lg text-white placeholder-gray-600 focus:border-red-600 focus:outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Info Section */}
        <div className="grid sm:grid-cols-2 gap-6 animate-fadeInUp">
          {infoCards.map((info, idx) => (
            <div
              key={info.label}
              className="relative bg-gradient-to-br from-red-600/10 to-pink-500/10 border border-red-600/20 rounded-lg p-6 hover:shadow-lg hover:shadow-red-600/30 transition-all"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-lg bg-red-600/10 blur-xl opacity-0 group-hover:opacity-30 transition-all pointer-events-none" />
              <h3 className="text-red-400 font-bold mb-2">{info.label}</h3>
              <p className="text-gray-300">{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
