import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Winner of RIT Hackathon"
            subTitle="Sangli, 2023"
            result="Winner"
            des="Led a team to develop an innovative web application that addressed real-world challenges, earning first place in the competition."
          />

           <ResumeCard
            title="Completed Java Full stack Training"
            subTitle="Pentagon Space"
            result="Completed"
            des="Developed proficiency in Core Java, focusing on object-oriented programming and building robust Java applications through hands-on projects."
          />

          <ResumeCard
            title="Completed Data Structures and Object-Oriented Programming Training"
            subTitle="APTITECH"
            result="Completed"
            des="Gained a strong understanding of data structures and object-oriented design, applying these concepts to optimize algorithms and improve software efficiency."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Other Activities</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Coordinator of CSE Dept."
            subTitle="NBNSCOE, Solapur"
            result="Coordinator"
            des="Managed events and activities for the CSE department, coordinating teams and ensuring successful execution of technical events."
          />
          
          <ResumeCard
            title="Participated in Equilibrium 2024 Competition"
            subTitle="GDSC Pune, 2024"
            result="Participant"
            des="Presented a project at Equilibrium 2024 Competition, showcasing my technical skills in front of a panel of experts. The project was well-received and praised for its innovation."
          />
          <ResumeCard
            title="Participant in SIH"
            subTitle="2023 & 2024"
            result="Participant"
            des="Participated in solving real-world problems with a team, building a technical solution for a national-level hackathon."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
