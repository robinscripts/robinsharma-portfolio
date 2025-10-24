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
      setIsSticky(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all h-[15vh] duration-300 ${
        isSticky
          ? "sticky top-0 bg-(--color-transparent) backdrop-blur-2xl shadow-lg"
          : "relative bg-transparent"
      }`}
    >
      <div className="max-w-340 m-auto flex justify-between items-center py-4 px-6 md:px-10">
        <img src={logo} alt="R" className="w-[70px] h-[70px] rounded-full object-cover"/>
        <div className="flex gap-6">
          {socialLinks.map((handle, index) => (
            <a 
              key={index} href={handle.link} target="_blank" rel="noopener noreferrer"
              className="text-(--color-primary) hover:text-(--color-secondary) transition-colors" 
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