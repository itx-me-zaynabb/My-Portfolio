import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react"; // install lucide-react

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pb-12 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Header */}
        <div className="mb-16 animate-fadeInUp text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's talk about it.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-pink-500 rounded-full mx-auto mt-6" />
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fadeInUp">
          {[
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
          ].map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-900 to-black border border-red-600/20 rounded-lg p-8 hover:border-red-600/50 transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all">
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
        <div className="max-w-2xl mx-auto animate-fadeInUp">
          {submitted && (
            <div className="mb-6 p-4 bg-green-600/20 border border-green-400 rounded">
              Thank you! I will get back to you soon.
            </div>
          )}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-600/20 rounded-lg p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-black border border-red-600/30 rounded-lg text-white placeholder-gray-600 focus:border-red-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-black border border-red-600/30 rounded-lg text-white placeholder-gray-600 focus:border-red-600 focus:outline-none transition"
                />
              </div>

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
        <div className="mt-16 animate-fadeInUp">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Location", value: "Multan, Punjab, Pakistan" },
              { label: "Phone", value: "+92-329-9047554" },
            ].map((info) => (
              <div
                key={info.label}
                className="bg-gradient-to-br from-red-600/10 to-pink-500/10 border border-red-600/20 rounded-lg p-6"
              >
                <h3 className="text-red-400 font-bold mb-2">{info.label}</h3>
                <p className="text-gray-300">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
