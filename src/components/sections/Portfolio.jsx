import BuildingBullsImg from "../../assets/images/projects/buildingBulls.png";
import MegablogImg from "../../assets/images/projects/megablog.png";
import WeatherappImg from "../../assets/images/projects/weatherapp.png";
import FitfusionImg from "../../assets/images/projects/fitfusion.png";

const projects = [
  {
    title: "Building Bulls",
    link: "https://buildingbulls.ca/",
    img: BuildingBullsImg,
    srcCode: "",
  },
  {
    title: "Fit Fusion",
    link: "https://robinscripts.github.io/fit-fusion/",
    img: FitfusionImg,
    srcCode: "",
  },
  {
    title: "Weather App",
    link: "https://robinscripts.github.io/weather-app/",
    img: WeatherappImg,
    srcCode: "",
  }
];

function Portfolio() {
  return (
    <section id="portfolio">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-(--color-fblack)">
          My Recent Works
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Here are some of the projects I’ve built using modern web technologies. Hover over each to view the live demo.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-(--color-primary) bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-3 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white hover:text-(--color-secondary) text-(--color-primary) rounded-md font-medium transition-all duration-300"
                >
                  Live Demo
                </a>
                {project.srcCode && (
                  <a
                    href={project.srcCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-(--color-primary) hover:bg-(--color-primary) hover:text-white text-(--color-primary) rounded-md font-medium transition-all duration-300"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;