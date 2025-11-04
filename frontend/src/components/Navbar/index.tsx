import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";

const sections = [
  { section: "home", link: "/#home", icon: "/images/icons/home.svg" },
  { section: "aboutMe", link: "/#aboutMe", icon: "/images/icons/aboutMe.svg" },
  {
    section: "projects",
    link: "/#projects",
    icon: "/images/icons/projects.svg",
  },
  { section: "blog", link: "/#blog", icon: "/images/icons/blog.svg" },
  { section: "links", link: "/#links", icon: "/images/icons/links.svg" },
];

const smoothScroll = (link: string) => {
  const element = document.getElementById(link.replace("/#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 2;
      setVisible(window.scrollY > triggerPoint);

      let currentSection = "home";
      sections.forEach(({ section }) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.navbar} ${visible ? styles.show : styles.hide}`}>
      {sections.map(({ section, link, icon }) => (
        <div
          key={section}
          className={activeSection === section ? styles.highlight : ""}
        >
          <img src={icon} alt={section} onClick={() => smoothScroll(link)} />
        </div>
      ))}
    </div>
  );
};

export default Navbar;

