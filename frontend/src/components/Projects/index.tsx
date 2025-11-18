import { useEffect, useState } from "react";

import styles from "./Projects.module.scss";

type Project = {
  url: string;
  name: string;
  description: string;
  language: string;
};

const Projects = () => {
  const [pinnedProjects, setPinnedProjects] = useState<Project[]>([]);
  const [sideScroll, setSideScroll] = useState(0);

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/projects.json");
      const data: Project[] = await response.json();
      setPinnedProjects(data);
    };
    fetchProjects();

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY === 0) return;
      event.preventDefault();
      setSideScroll((prev) => prev + event.deltaY);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={styles.projects}>
      {pinnedProjects.map((project) => (
        <div
          key={project.name}
          className={styles.projectCard}
          onClick={() => handleClick(project.url)}
          style={{ transform: `translateX(${sideScroll}px)` }}
        >
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {project.language && (
            <span className={styles.language}>{project.language}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;

