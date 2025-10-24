import { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logos/file.png";

const socialLinks = [
  {
    icon: <FaGithub className="w-10 h-10" />,
    link: "https://github.com/robinscripts",
  },
  {
    icon: <FaLinkedin className="w-10 h-10" />,
    link: "https://www.linkedin.com/in/robinsharma85",
  },
  {
    icon: <FaInstagram className="w-10 h-10" />,
    link: "https://www.instagram.com/robin_1e",
  },
];

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight / 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-10 transition-all h-14vh duration-800 ${
        isSticky
          ? "fixed top-0 bg-(--color-transparent) backdrop-blur-md shadow-2xl py-2"
          : "relative bg-transparent py-4"
      }`}
    >
      <div className="max-w-340 m-auto flex justify-between items-center px-6 md:px-10">
        <img 
          src={logo} alt="R"
          className = {`w-[70px] h-[70px] rounded-full object-cover transition-transform duration-800 ${
            isSticky ? "scale-90" : "scale-100"
          }`}/>
        <div className="flex gap-6">
          {socialLinks.map((handle, index) => (
            <a 
              key={index} href={handle.link} target="_blank" rel="noopener noreferrer"
              className = {`text-(--color-primary) hover:text-(--color-secondary) transform transition-transform hover:scale-120 hover:-translate-y-1 ${
                isSticky ? "duration-800 scale-90" : "scale-100"}`} 
            >
              {handle.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;