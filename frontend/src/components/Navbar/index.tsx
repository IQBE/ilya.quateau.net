import { useState } from "react";
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

  window.onscroll = () => {
    const triggerPoint = window.innerHeight / 2;
    setVisible(window.scrollY > triggerPoint);
  };

  return (
    <div className={`${styles.navbar} ${visible ? styles.show : styles.hide}`}>
      {sections.map(({ section, link, icon }) => (
        <img src={icon} alt={section} onClick={() => smoothScroll(link)} />
      ))}
    </div>
  );
};

export default Navbar;

