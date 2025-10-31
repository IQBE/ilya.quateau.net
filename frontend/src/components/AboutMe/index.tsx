import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  const [aboutMeText, setAboutMeText] = useState("");

  useEffect(() => {
    fetch("/aboutMe.md")
      .then((response) => response.text())
      .then((text) => setAboutMeText(text));
  }, []);

  return (
    <div className={styles.container}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkFrontmatter]}
        components={{
          h1: ({ children }) => {
            return <h1 className={styles.title}>{children}</h1>;
          },
          p: ({ children }) => {
            return <p className={styles.paragraph}>{children}</p>;
          },
        }}
      >
        {aboutMeText}
      </ReactMarkdown>
    </div>
  );
};

export default AboutMe;

