import styles from "./Stars.module.scss";

const Stars = () => {
  const stars = Array.from({ length: 250 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 5}s`,
  }));

  const fallingStars = Array.from({ length: 5 }, (_, i) => {
    const segmentWidth = 100 / 5;
    const horizontalBase = i * segmentWidth;
    const horizontalOffset = Math.random() * segmentWidth;
    const top = Math.random() * 80;

    return {
      top: `${top}%`,
      left: `${horizontalBase + horizontalOffset}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 7}s`,
    };
  });

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

      {fallingStars.map((star, index) => (
        <span
          key={`falling-${index}`}
          className={styles.falling}
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

