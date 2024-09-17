import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaPython,
  FaAndroid,
  FaJava,
  FaAngular,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiGmail } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer",
      "Professional Coder",
      "Full Stack Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">
          WELCOME TO MY PERSONAL PORTFOLIO
        </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Mustafa Masuldar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Quick-thinking engineer, successful in making decisions in
          high-pressure environments. Knowledgeable about cutting-edge
          technologies such as Data Science, Machine Learning, and software
          development, with a background in coordinating multidisciplinary
          teams.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://github.com/Mmustafa-772002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-masuldar-25099920a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            {/* mail not working */}
            <a href="mailto:mustafamasuldar007@gmail.com">
              <span className="bannerIcon">
                <SiGmail />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaAngular />
            </span>
            <span className="bannerIcon">
              <FaAndroid />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
