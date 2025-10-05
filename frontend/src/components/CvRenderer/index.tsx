import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

import styles from "./CvRenderer.module.scss";

const bulletIcons: Record<string, string> = {
  Email: "📬",
  Phone: "📱",
  Website: "🌐",
};

const CvRenderer = ({ cv }: { cv: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkFrontmatter]}
      components={{
        li: ({ children }) => {
          let text = "";
          if (Array.isArray(children)) {
            text = children
              .map((child) => {
                if (typeof child === "string") return child;
                if (
                  React.isValidElement(child) &&
                  child.props &&
                  typeof (child.props as { children?: unknown }).children ===
                    "string"
                )
                  return (child.props as { children?: string }).children;
                return "";
              })
              .join("");
          } else if (typeof children === "string") {
            text = children;
          }
          const iconKey = Object.keys(bulletIcons).find((key) =>
            text.startsWith(key)
          );
          return (
            <li className={styles.listItem}>
              {iconKey && bulletIcons[iconKey]}
              <span>{text}</span>
            </li>
          );
        },
        h4: ({ children }) => {
          return <h4 className={styles.part}>{children}</h4>;
        },
      }}
    >
      {cv}
    </ReactMarkdown>
  );
};

export default CvRenderer;

