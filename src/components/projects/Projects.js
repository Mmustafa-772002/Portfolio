import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {/* <ProjectsCard
          title="Driver Drowsiness Detection"
          des="A computer vision project that detects driver drowsiness by analyzing facial features through camera input."
          src={projectOne}
          link="https://github.com/Mmustafa-772002/Driver-Drowsiness-Detection"
        />
        <ProjectsCard
          title="QR Code Scanner App"
          des="An Android app that scans barcodes effortlessly, providing instant and accurate results."
          src={projectOne}
          link="https://github.com/Mmustafa-772002/QR-Code-Scanner-app"
        />

<ProjectsCard
          title="PDF Text Extractor"
          des="A web platform for extracting text from PDF images and converting them into txt files."
          src={projectOne}
          link="https://github.com/Mmustafa-772002/PDF-Text-Extractor/tree/main"
        />
        <ProjectsCard
          title="Plant Disease Detection"
          des="A project that uses image processing to detect plant diseases using Python and Flask."
          src={projectOne}
          link="https://github.com/Mmustafa-772002/Plant-Disease-Detection-web/tree/main"
        />

        <ProjectsCard
          title="Bus Seat Booking System"
          des="A web application that allows users to book bus seats in real time with seat selection and booking confirmation features."
          src={projectOne}
          link="https://github.com/Mmustafa-772002/bus-seat-booking-"
        />

       <ProjectsCard
          title="IndiSpeak"
          des="Translate English to Indian Vernaculars. Welcome to IndiSpeak, your one-stop destination for seamless translation of English resource materials and texts into a variety of Indian regional languages. Unlock the power of communication across India's diverse linguistic landscape with our user-friendly translation software. Say goodbye to language barriers and explore the rich tapestry of Indian languages with IndiSpeak!"
          src={projectOne}
          link="https://github.com/Mmustafa-772002/project-code/tree/main"
        /> */}
        <ProjectsCard
          title="IndiSpeak"
          des="IndiSpeak: Effortlessly translate English into multiple Indian regional languages. Overcome language barriers with our intuitive translation software, embracing the linguistic diversity of India's vast cultural landscape."
          src={projectOne}
        />

        <ProjectsCard
          title="Plant Disease Detection"
          des="Plant Disease Detection: A project leveraging image processing to identify plant diseases using Python and Flask. It analyzes plant images, enabling early detection and prevention, ensuring healthier crops and improved agricultural productivity."
          src={projectTwo}
        />

        <ProjectsCard
          title="PDF Text Extractor"
          des="PDF Text Extractor: A web platform that extracts text from PDF images, converting them into easily accessible .txt files. Additionally, it organizes extracted images into a separate folder for streamlined data management"
          src={projectThree}
        />

        <ProjectsCard
          title="Driver Drowsiness Detection"
          des="Driver Drowsiness Detection: A computer vision project that monitors driver fatigue by analyzing facial features using real-time camera input for enhanced road safety."
          src={projectThree}
        />
        <ProjectsCard
          title="QR Code Scanner App"
          des="QR Code Scanner App: An Android app that detects barcodes quickly and accurately, offering seamless scanning and instant results with multiplatform support"
          src={projectOne}
        />
        <ProjectsCard
          title="Seat Booking System"
          des="A web application that enables users to book bus seats in real time, complete with features for seat selection and booking confirmation."
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
