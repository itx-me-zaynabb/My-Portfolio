import React from "react";
import { ReactLogo, NestLogo, Zap } from "../components/Logos";

export default function About() {
  const stats = [
    { label: "Experience", value: "2 Internships" },
    { label: "Focus", value: "Frontend Development" },
  ];

  const skills = [
    {
      category: "Frontend",
      icon: <ReactLogo size="md" />,
      items: [
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Responsive Design",
        "React Router",
        "Formik",
        "Yup",
      ],
    },
    {
      category: "Backend (Supporting)",
      icon: <NestLogo size="md" />,
      items: ["NestJS", "Node.js", "MongoDB", "REST APIs", "Socket.IO"],
    },
    {
      category: "Tools & Others",
      icon: <Zap className="w-10 h-10 text-yellow-400 animate-pulse" />,
      items: [
        "GitHub",
        "API Integration",
        "Debugging",
        "Agile Workflow",
        "HTML",
      ],
    },
  ];

  const languages = [
    { lang: "English", level: 95 },
    { lang: "Urdu", level: 100 },
  ];

  return (
    <div className="min-h-screen pb-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Header */}
        <div className="mb-16 animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-pink-500 rounded-full animate-glow" />
        </div>

        {/* Bio + Stats */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {/* Bio */}
          <div className="md:col-span-2 space-y-6 animate-fadeInUp">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Junior Frontend React Developer with hands-on
              experience building responsive, high-performance web applications.
              I enjoy crafting clean UI, smooth UX, and scalable frontend
              architectures.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Currently pursuing my BS in Computer Science (2023–2027), I’ve
              worked on real-world projects including live chat systems,
              university management platforms, and modern portfolio websites.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Outside coding, I explore cybersecurity concepts, refine my
              problem-solving skills, and contribute to open-source projects.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6 animate-fadeInUp">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-gradient-to-br from-red-600/10 to-pink-500/10
                border border-red-600/20 rounded-xl p-6
                hover:border-red-600/60 hover:shadow-lg hover:shadow-red-600/30
                transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-red-400 font-semibold text-sm uppercase tracking-wide">
                  {stat.label}
                </h3>
                <p className="text-white text-xl font-bold mt-2">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={skill.category}
                className="group bg-gradient-to-br from-gray-900 to-black
                border border-red-600/20 rounded-xl p-8
                hover:border-red-600/60 hover:shadow-xl hover:shadow-red-600/30
                transform hover:-translate-y-2 hover:scale-[1.02]
                transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="group-hover:rotate-6 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg">{skill.category}</h3>
                </div>

                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-400 flex items-center gap-2 group-hover:text-gray-200 transition"
                    >
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8">Languages</h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {languages.map((item) => (
              <div
                key={item.lang}
                className="bg-gradient-to-br from-red-600/10 to-pink-500/10
                border border-red-600/20 rounded-xl p-6
                hover:border-red-600/60 hover:shadow-lg hover:shadow-red-600/30
                transition-all duration-300"
              >
                <h3 className="font-bold mb-3">{item.lang}</h3>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-600 to-pink-500 h-2 rounded-full
                    animate-pulse"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
