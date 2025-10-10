// import { useEffect, useState } from "react";

import StaticCv from "../../components/StaticCv";
import styles from "./Cv.module.scss";
// import CvRenderer from "../../components/CvRenderer";

const CV = () => {
  // const [cv, setCv] = useState<string>("");

  // useEffect(() => {
  //   fetch("/cv.md")
  //     .then((response) => response.text())
  //     .then(setCv)
  //     .catch((error) => console.error("Error fetching CV:", error));
  // }, []);

  return (
    <div className={styles.CV}>
      {/* THE CV Render is just a bit too hard to do. Let's do a static cv for now in tsx */}
      {/* <CvRenderer cv={cv} /> */}
      <StaticCv />
    </div>
  );
};

export default CV;

