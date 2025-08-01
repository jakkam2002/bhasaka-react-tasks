import React from "react";
import image1 from '../assets/ats-image.jpg'
import image2 from '../assets/ams-image.jpg'
import image3 from '../assets/arc-image.jpg'
import "./Projects.css";

const projectsData = [
  {
    title: "Application Tracking System",
    description:
      "The Application Tracking System is a comprehensive recruitment management solution built to simplify and automate the hiring workflow. It allows HR professionals and hiring managers to post jobs, manage candidate applications, and streamline the entire interview process. Candidates can be tracked through various stages of recruitment, with detailed profiles and status updates. Interview schedules, feedback, and decisions are centralized, offering a collaborative space for teams. The platform is role-driven, enabling permissions and visibility based on user type, ensuring that sensitive data is only accessible to the right people. With integrated calendar views and automated alerts, it makes hiring not only faster but smarter.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    image:image1

  },
  {
    title: "Attendance Management System",
    description:
      "Agile Requirement Capture is a structured and scalable platform designed to support software teams in planning, tracking, and managing product requirements across development cycles. The system enables users to define epics, break them down into features, and further into user stories and tasks—ensuring clarity and alignment at every level. Teams can document daily stand-ups, plan and assign work during sprint planning sessions, and reflect during retrospectives, all within a single interface. This tool brings together the discipline of agile methodologies and the flexibility of a modern web app, empowering teams to move with purpose while staying adaptable.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    image:image2
  },
  {
    title: "Agile Requirement Capture",
    description:
      "The Attendance Management System is a digital platform crafted to monitor and manage employee attendance with precision and ease. It records daily attendance entries, handles various leave types, and provides an administrative dashboard for tracking employee availability. Users can request time off, view attendance history, and receive automated alerts for missed entries or approvals. The system supports both in-office and remote work setups, offering a flexible solution tailored to modern workforce needs. With built-in reporting and visual summaries, it helps HR teams stay informed and ensures policy adherence without the burden of manual tracking.",
    techStack: ["React", "Redux", "Django", "SQL"],
    image:image3
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt="dgfvh"/>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
