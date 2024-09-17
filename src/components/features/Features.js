import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaCode } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiFlask } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Machine Learning Projects"
          des="Experience building machine learning applications such as Driver Drowsiness Detection and Plant Disease Detection using Python and Flask."
          icon={<SiFlask />}
        />
        <Card
          title="App Development"
          des="Skilled in Android development, including creating apps like QR Code Scanner using Java."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Web Development"
          des="Developed web applications using HTML, CSS, JavaScript, and Flask for projects like PDF Text Extractor."
          icon={<FaGlobe />}
        />
        <Card
          title="Mobile Development"
          des="Experienced in developing mobile applications with a focus on performance and user experience."
          icon={<FaMobile />}
        />
        <Card
          title="React Developer"
          des="Created dynamic, responsive user interfaces and reusable components with React to enhance web application performance."
          icon={<SiAntdesign />}
        />

        <Card
          title="Coding and Problem Solving"
          des="Proficient in multiple programming languages like C, C++, Java, and Python, with a strong foundation in data structures and algorithms."
          icon={<FaCode />}
        />
      </div>
    </section>
  );
};

export default Features;
