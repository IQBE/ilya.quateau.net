import { useEffect, useState } from "react";

import styles from "./Cv.module.scss";
import CvRenderer from "../../components/CvRenderer";

const CV = () => {
  const [cv, setCv] = useState<string>("");

  useEffect(() => {
    fetch("/cv.md")
      .then((response) => response.text())
      .then(setCv)
      .catch((error) => console.error("Error fetching CV:", error));
  }, []);

  return (
    <div className={styles.CV}>
      <h2>Curriculum Vitae</h2>
      <CvRenderer cv={cv} />
    </div>
  );
};

export default CV;

