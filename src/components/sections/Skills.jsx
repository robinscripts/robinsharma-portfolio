// import React from "react";
// import { FaLaptopCode, FaDatabase, FaCogs } from "react-icons/fa";

// const frontend = [
//   "React.js",
//   "JavaScript",
//   "jQuery",
//   "Context API",
//   "Redux",
//   "React Router",
//   "HTML",
//   "CSS",
//   "Material UI",
//   "Tailwind",
//   "Bootstrap",
// ];

// const backend = [
//   "PHP",
//   "JavaScript",
//   "Node.js",
//   "Express.js",
//   "Axios",
//   "SQL",
//   "PostgreSQL",
//   "REST APIs",
// ];

// const others = [
//   "C++",
//   "Debugging",
//   "API Integration",
//   "VS Code",
//   "Git & GitHub",
//   "Postman",
// ];

// function Skills() {
//   return (
//     <section id="skills">
//       {/* Header Section */}
//       <div className="bg-[var(--color-primary)] text-white py-16 px-4 text-center">
//         <h2 className="text-4xl font-bold mb-6">My ToolBox</h2>
//         <p className="max-w-4xl mx-auto text-lg leading-relaxed">
//           Cutting-edge tech is my playground, where I build flawless digital
//           experiences. As a passionate problem-solver, I'm constantly learning
//           and pushing boundaries to craft the best solutions. Whether it's a
//           complex challenge or a fresh idea, I'm eager to dive in and make it a
//           reality. Have a look or explore the technologies/tools I use to bring
//           your vision to life!
//         </p>
//       </div>

//       {/* Skills Cards */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 px-4 -mt-24">
//         {/* Frontend Card */}
//         <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 text-center">
//           <div className="bg-[var(--color-secondary)] w-24 h-24 rounded-full flex items-center justify-center mx-auto">
//             <FaLaptopCode className="text-4xl text-[var(--color-fblack)]" />
//           </div>
//           <h3 className="text-xl font-bold py-6 text-[var(--color-fblack)]">
//             Frontend Development
//           </h3>
//           <ul className="space-y-1">
//             {frontend.map((skill, idx) => (
//               <li
//                 key={idx}
//                 className="text-[var(--color-primary)] font-medium text-center"
//               >
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Backend Card */}
//         <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 text-center">
//           <div className="bg-[var(--color-secondary)] w-24 h-24 rounded-full flex items-center justify-center mx-auto">
//             <FaDatabase className="text-4xl text-[var(--color-fblack)]" />
//           </div>
//           <h3 className="text-xl font-bold py-6 text-[var(--color-fblack)]">
//             Backend Development
//           </h3>
//           <ul className="space-y-1">
//             {backend.map((skill, idx) => (
//               <li
//                 key={idx}
//                 className="text-[var(--color-primary)] font-medium text-center"
//               >
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Others Card */}
//         <div className="flex-1 bg-white rounded-2xl shadow-lg p-10 text-center">
//           <div className="bg-[var(--color-secondary)] w-24 h-24 rounded-full flex items-center justify-center mx-auto">
//             <FaCogs className="text-4xl text-[var(--color-fblack)]" />
//           </div>
//           <h3 className="text-xl font-bold py-6 text-[var(--color-fblack)]">
//             Extra’s I am Fond of
//           </h3>
//           <ul className="space-y-1">
//             {others.map((skill, idx) => (
//               <li
//                 key={idx}
//                 className="text-[var(--color-primary)] font-medium text-center"
//               >
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;

import React from "react";
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
