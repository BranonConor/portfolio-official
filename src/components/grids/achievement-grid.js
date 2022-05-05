import "./project-card.css";
import "aos/dist/aos.css";
import "./achievement-grid.css";

import React, { useEffect, useState } from "react";

import AOS from "aos";
import AchievementCard from "./achievement-card";
import { motion } from "framer-motion";

const AchievementGrid = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const [projects, setProjects] = useState([
    {
      name: "Brought a product up to WCAG 2.0 AA Compliance 🎉",
      role: "Design Technologist",
      description:
        "I recently audited and fixed Color's All of Us platform codebase to bring it to WCAG 2.0 AA compliance!",
      technologies: [
        "ReactJS",
        "Typescript",
        "Material UI",
        "Styled Components",
        "WCAG AA 2.0",
        "Figma",
      ],
      demoLink: "",
      codeLink: "",
      id: 1,
    },
    {
      name: "Finishing up a Typescript Course 🛠",
      role: "Software Developer Consultant",
      description:
        "Still working with Colt Steele to bring a highly anticipated Typescript course to life! We're currently tackling finishing touches for release on Udemy this year.",
      technologies: ["Typescript", "JS", "Data Structures", "Udemy", "ReactJS"],
      demoLink: "https://www.udemy.com/user/coltsteele/",
      codeLink: "",
      id: 2,
    },
    {
      name: "Spoke to SDSU Design students about careers in tech! 🧠",
      role: "Panelist - Design Technology",
      description:
        "SDSU + Friends of Figma, SD were kind enough to have me on as a panelist to share my experience breaking into tech through an unorthodox career path.",
      technologies: [
        "SDSU",
        "Design",
        "Friends of Figma",
        "Design Technology",
        "Tech Career",
        "Community Engagement",
      ],
      demoLink:
        "https://www.youtube.com/watch?v=MdwRX0MwtFE&ab_channel=FriendsofFigma%2CSanDiego",
      codeLink: "",
      id: 3,
    },
    {
      name: "Started a fullstack rebuild of ListRocket! 🚀",
      role: "Fullstack Engineer",
      description:
        "I recently started rebuilding the API and redesigning the frontend of a side project I'm building called ListRocket!",
      technologies: [
        "Frontend",
        "Backend",
        "Fullstack",
        "ReactJS",
        "NextJS",
        "Styled Components",
      ],
      demoLink: "https://list-rocket.vercel.app",
      codeLink: "https://github.com/BranonConor/list-rocket2",
      id: 4,
    },
  ]);

  return (
    <motion.div
      className="AchievementGrid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        duration: 2,
      }}
    >
      <div className="content">
        <h5 className="subtitle-blue">Recent Achievements</h5>
      </div>
      <div className="achievements">
        {projects.map((project) => {
          return (
            <AchievementCard
              name={project.name}
              role={project.role}
              description={project.description}
              technologies={project.technologies}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              animationType={project.animation}
              animationTime={project.animationTime}
              key={project.id}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default AchievementGrid;
