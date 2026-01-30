import React from "react";
import { Briefcase, CloudSun } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "University Management System",
      description:
        "Full-stack web app for managing university operations using React and Node.js",
      highlights: ["Full-Stack", "React.js", "Node.js", "MongoDB"],
      tech: ["React.js", "Node.js", "NestJS", "MongoDB", "Tailwind CSS"],
      link: "https://github.com/itx-me-zaynabb/university-management",
      icon: <Briefcase size={46} />,
    },
    {
      title: "Live Chat Application",
      description: "Real-time chat app with WebSocket and React integration",
      highlights: ["Realtime Chat", "Socket.IO", "React.js"],
      tech: ["React.js", "Socket.IO", "Node.js", "Tailwind CSS"],
      link: "https://github.com/itx-me-zaynabb/live-chat-app",
      icon: <Briefcase size={46} />,
    },
    {
      title: "Weather Application",
      description:
        "Modern weather app using live API, city search and dynamic UI animations.",
      highlights: ["API Integration", "Live Data", "Responsive"],
      tech: ["React.js", "OpenWeather API", "Tailwind CSS"],
      link: "https://github.com/itx-me-zaynabb/weather-app",
      icon: <CloudSun size={46} />,
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio using React.js and Tailwind CSS",
      highlights: ["Frontend", "React.js", "Tailwind CSS"],
      tech: ["React.js", "Tailwind CSS", "Vite", "GitHub Pages"],
      link: "https://github.com/itx-me-zaynabb/react-portfolio",
      icon: <Briefcase size={46} />,
    },
  ];

  const experience = [
    {
      title: "Full-Stack Developer Intern",
      company: "Syntecxhub",
      description:
        "Developed frontend features using React.js and integrated APIs with NestJS. Built responsive UI components and implemented real-time features using Socket.IO.",
      type: "Remote",
    },
    {
      title: "Frontend Developer Intern",
      company: "Developer Hub Corporation",
      description:
        "Built reusable UI components and responsive layouts using React. Worked with Tailwind CSS for styling and implemented complex state management.",
      type: "Onsite",
    },
  ];

  return (
    <div className="min-h-screen pb-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        {/* Header */}
        <div className="mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-pink-500 rounded-full" />
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group rounded-xl overflow-hidden
                bg-gradient-to-br from-gray-900 to-black
                border border-red-600/20
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]
                hover:border-red-600/60
                animate-fadeInUp
              "
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {/* Icon */}
              <div className="h-44 flex items-center justify-center bg-gradient-to-br from-red-600/20 to-pink-500/20 group-hover:from-red-600/40 group-hover:to-pink-500/40 transition-all">
                <div className="text-red-400 group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-red-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 text-xs rounded-full bg-red-600/10 border border-red-600/20 text-red-400"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-red-600/10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-gray-400 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={exp.title}
                className="p-6 rounded-xl bg-gradient-to-r from-red-600/5 to-pink-500/5 border border-red-600/20 hover:border-red-600/40 transition-all animate-fadeInUp"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-red-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-red-600/10 border border-red-600/20 text-red-400">
                    {exp.type}
                  </span>
                </div>
                <p className="text-gray-400 mt-3">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
