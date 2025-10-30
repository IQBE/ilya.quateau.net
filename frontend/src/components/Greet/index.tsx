import { useRef, useState, useEffect } from "react";
import styles from "./Greet.module.scss";

import Folder from "./Folder";
import Typewriter from "./Typewriter";
import Stars from "./Stars";

const Greet = () => {
  const typewriterRef = useRef<HTMLDivElement>(null);
  const [targetHeight, setTargetHeight] = useState(0);

  useEffect(() => {
    if (!typewriterRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setTargetHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(typewriterRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.greet}>
      <div className={styles.centerpiece}>
        <Folder targetHeight={targetHeight} />
        <div ref={typewriterRef}>
          <Typewriter />
        </div>
      </div>
      <Stars />
    </div>
  );
};

export default Greet;

