import { useState, useEffect } from "react";
import styles from "./Typewriter.module.scss";

const Typewriter = () => {
  const [displayedText, setDisplayedText] = useState({ line1: "", line2: "" });
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const line1 = "ILYA";
  const line2 = "QUATEAU";
  const typingSpeed = 150;
  const initialDelay = 1000;

  useEffect(() => {
    let currentIndex = 0;
    let isFirstLine = true;
    let intervalId: number;

    const typeWriter = () => {
      if (isFirstLine) {
        if (currentIndex < line1.length) {
          setDisplayedText((prev) => ({
            ...prev,
            line1: line1.slice(0, currentIndex + 1),
          }));
          currentIndex++;
        } else {
          isFirstLine = false;
          currentIndex = 0;
        }
      } else {
        if (currentIndex < line2.length) {
          setDisplayedText((prev) => ({
            ...prev,
            line2: line2.slice(0, currentIndex + 1),
          }));
          currentIndex++;
        } else {
          setIsTypingComplete(true);
          clearInterval(intervalId);
        }
      }
    };

    const timeout = setTimeout(() => {
      typeWriter();
      intervalId = setInterval(typeWriter, typingSpeed);
    }, initialDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.typewriter}>
      <div className={styles.typewriterLine}>
        {displayedText.line1}
        {displayedText.line1.length < line1.length && (
          <span className={styles.cursor} />
        )}
      </div>
      <div className={styles.typewriterLine}>
        {displayedText.line2}
        {displayedText.line1.length === line1.length && (
          <span
            className={`${styles.cursor} ${isTypingComplete ? styles.blinking : ""}`}
          />
        )}
      </div>
    </div>
  );
};

export default Typewriter;

