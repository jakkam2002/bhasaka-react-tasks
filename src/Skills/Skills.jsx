import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiExpress } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import "./Skills.css";
import {
  // FaReact,
  FaPython,
  FaBootstrap,
  // FaCss3,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiMui,
  SiRedux,
  SiAntdesign,
  SiJquery,
} from "react-icons/si";

const skillsData = [
  {
    name: "ReactJs",
    icon: <FaReact style={{ fontSize: "40px" }} />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 style={{ fontSize: "40px" }} />,
  },
  {
    name: "CSS3",
    icon: <FaCss3 style={{ fontSize: "40px" }} />,
  },
  {
    name: "JavaScript",
    icon: <FaJs style={{ fontSize: "40px" }} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript style={{ fontSize: "40px" }} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs style={{ fontSize: "40px" }} />,
  },
  {
    name: "Express",
    icon: <SiExpress style={{ fontSize: "40px" }} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ fontSize: "40px" }} />,
  },
  {
    name: "GitHub",
    icon: <FaGithub style={{ fontSize: "40px" }} />,
  },
  { name: "ReactJs", icon: <FaReact style={{ fontSize: "40px" }} /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss style={{ fontSize: "40px" }} />,
  },
  { name: "Python", icon: <FaPython style={{ fontSize: "40px" }} /> },
  { name: "Django", icon: <SiDjango style={{ fontSize: "40px" }} /> },
  { name: "PostgreSQL", icon: <SiPostgresql style={{ fontSize: "40px" }} /> },
  { name: "MUI", icon: <SiMui style={{ fontSize: "40px" }} /> },
  { name: "jQuery", icon: <SiJquery style={{ fontSize: "40px" }} /> },
  // { name: "Ant Design", icon: <SiAntdesign style={{ fontSize: "40px" }} /> },
  { name: "Bootstrap", icon: <FaBootstrap style={{ fontSize: "40px" }} /> },
  { name: "Redux", icon: <SiRedux style={{ fontSize: "40px" }} /> },

  // { name: "Azure", icon: <FaAzure style={{ fontSize: "40px" }} /> },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-h1-div">
        <h1 className="skills-h1">
          {/* <FaComputer /> */}
          {/* <strong>&nbsp;&nbsp;Skills & Abilities</strong> */}
        </h1>
      </div>
      <div className="skills-div">
        {skillsData.map((skill, index) => (
          <div key={index} className="react">
            {skill.icon}
            <br />
            <h5>{skill.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
