import styles from "./StaticCv.module.scss";

const StaticCv = () => {
  return (
    <>
      <div className={styles.heading}>
        <h1>Ilya Quateau</h1>
        <p className="subtitle">Software Engineer</p>
      </div>
      <div className={styles.contact}>
        <h2>Contact Information</h2>
        <ul>
          <li>Email: ilya@example.com</li>
          <li>Phone: (123) 456-7890</li>
        </ul>
      </div>
    </>
  );
};

export default StaticCv;

