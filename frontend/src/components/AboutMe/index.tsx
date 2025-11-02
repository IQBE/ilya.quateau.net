import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

import styles from "./AboutMe.module.scss";
import remarkUnwrapImages from "../../utils/remarkUnwrapImages";

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
        remarkPlugins={[remarkGfm, remarkFrontmatter, remarkUnwrapImages]}
        components={{
          h1: ({ children }) => {
            return <h1 className={styles.title}>{children}</h1>;
          },
          h2: ({ children }) => {
            return <h2 className={styles.subtitle}>{children}</h2>;
          },
          img: ({ src, alt }) => {
            return (
              <img className={styles.image} src={src ?? ""} alt={alt ?? ""} />
            );
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

