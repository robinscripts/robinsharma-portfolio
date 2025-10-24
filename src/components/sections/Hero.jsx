import React from "react";
import HeroImage from "../../assets/images/heroCropped.png";

function Hero() {
  return (
    <section id="home" className="flex items-end justify-center bg-white h-[85vh]">
      <div className="max-w-340 h-full flex flex-col md:flex-row justify-between items-center px-6 md:px-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center flex-5 space-y-4 py-10 text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Hello! I'm Robin Sharma
          </h1>
          <h2 className="text-(--color-primary) text-4xl md:text-5xl font-extrabold leading-snug">
            Innovative Problem Solver & Full-Stack Architect
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto md:mx-0 mt-4">
            I'm a Full-Stack Developer helping businesses build scalable web
            applications using React, Node.js, Salesforce, and modern web
            technologies. I specialize in turning complex problems into seamless
            digital solutions that drive results. Let's collaborate and bring
            your ideas to life!
          </p>
          {/* Buttons */}
          <div className="flex justify-start gap-4 pt-4">
            <a 
              href="https://wa.me/918556852011?text=Hi!%20I'm%20interested%20in%20working%20with%20you."
              target="__blank"
              className="px-6 py-2 bg-(--color-primary) text-white rounded-md font-medium hover:bg-(--color-secondary) transition-all duration-300">
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1uTFfU2nCrlpMwmLnRnpFNX8So-ub7BhD/view?usp=drive_link" 
              target="__blank"
              className="px-6 py-2 border-2 border-(--color-primary) text-(--color-primary) rounded-md font-medium hover:bg-(--color-primary) hover:text-white transition-all duration-300">
              Get CV
            </a>
          </div>
        </div>
        {/* Right Column */}
        <div className="hidden lg:flex justify-end items-end h-full overflow-clip">
          <img
            src={HeroImage}
            alt="Robin Sharma Hero"
            className="h-110 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
