import React from "react";
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

function Footer() {
  return (
    <footer id="footer" className="bg-[var(--color-primary)] text-white py-10">
      <div className="max-w-[90rem] mx-auto flex flex-col items-center px-6 text-center space-y-4">
        {/* Logo */}
        <img
          src={logo}
          alt="R"
          className="w-20 h-20 rounded-full object-cover filter invert brightness-200 contrast-200"
        />

        {/* Tagline */}
        <h2 className="text-lg font-medium">
          Caffeinated and ready to brew solutions
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--color-secondary)] transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-80">
          Brewed with love and code | Copyright ©{" "}
          {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;