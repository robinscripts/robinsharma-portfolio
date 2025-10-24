import {
  FaLaptopCode,
  FaDatabase,
  FaCogs,
  FaCloud,
} from "react-icons/fa";

const frontend = [
  "React.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "Redux / Context API",
  "React Router",
  "HTML5 / CSS3",
  "Tailwind / Material UI / Bootstrap",
];

const backend = [
  "Node.js / Express.js",
  "PHP",
  "SQL / PostgreSQL",
  "REST APIs",
  "Axios / Fetch",
  "Authentication & Authorization",
];

const salesforce = [
  "Salesforce Platform Development",
  "Apex Classes & Triggers",
  "Lightning Web Components (LWC)",
  "SOQL / SOSL",
  "Salesforce REST APIs",
  "Integration with External Systems",
];

const others = [
  "Git & GitHub",
  "API Integration",
  "Debugging",
  "Postman",
  "VS Code",
  "C++ / Algorithmic Problem Solving",
];

function Skills() {
  const cardData = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      skills: frontend,
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development",
      skills: backend,
    },
    {
      icon: <FaCloud />,
      title: "Salesforce Ecosystem",
      skills: salesforce,
    },
    {
      icon: <FaCogs />,
      title: "Tools & Other Expertise",
      skills: others,
    },
  ];

  return (
    <section id="skills" className="bg-white pb-20">
      {/* Header */}
      <div className="bg-(--color-primary) text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">
          My Tech Stack
        </h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed pb-25">
          I build reliable and scalable web solutions by blending modern
          technologies with clean architecture and user-centric design. From
          crafting pixel-perfect interfaces to designing efficient backends and
          Salesforce integrations — here’s what powers my development stack.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 -mt-24">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-8 text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="bg-(--color-secondary) w-24 h-24 rounded-full flex items-center justify-center mx-auto">
              <div className="text-4xl text-(--color-fblack)">
                {card.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold py-6 text-(--color-fblack)">
              {card.title}
            </h3>
            <ul className="space-y-2">
              {card.skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-(--color-primary) font-medium text-center"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
