import React from "react";

const projects = [
  {
    title: "Mega Blog",
    link: "https://mega-blog-bice-five.vercel.app/",
    srcCode: "",
  },
  {
    title: "Weather App",
    link: "https://robinscripts.github.io/weather-app/",
    srcCode: "",
  },
  {
    title: "Drawing Board",
    link: "https://robinscripts.github.io/drawing-board/",
    srcCode: "",
  },
    {
    title: "Fit Fusion",
    link: "https://robinscripts.github.io/fit-fusion/",
    srcCode: "",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-(--color-fblack)">
          My Recent Works
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden w-[320px] transition-transform hover:scale-[1.02] duration-300"
          >
            <IFrame link={project.link} />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-(--color-fblack) mb-2">
                {project.title}
              </h3>
            </div>
            <div className="flex justify-between px-5 pb-5">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--color-primary) hover:text-(--color-secondary) font-medium"
              >
                Live Demo
              </a>
              <a
                href={project.srcCode || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--color-primary) hover:text-(--color-secondary) font-medium"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

function IFrame({ link }) {
  return (
    <div className="h-[300px] w-full">
      <iframe
        src={link}
        scrolling="no"
        className="w-full h-full border-none"
        style={{ transform: "scale(1)" }}
        title="Project Preview"
      ></iframe>
    </div>
  );
}