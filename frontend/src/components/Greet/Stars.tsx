import styles from "./Stars.module.scss";

const Stars = () => {
  const stars = Array.from({ length: 250 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 5}s`,
  }));

  return (
    <div className={styles.stars}>
      {stars.map((star, index) => (
        <span
          key={index}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;

