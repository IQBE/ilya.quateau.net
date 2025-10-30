import styles from "./Theme.module.scss";

const Theme = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Halfomania Title</h1>
        <h2>Lack Italic Subtitle</h2>
      </header>

      <section className={styles.textSection}>
        <p>
          This is a regular paragraph in Lack. You can <i>highlight</i> text
          with primary color or make it <b>bold</b> for secondary emphasis.
        </p>
      </section>

      <section className={styles.buttonsSection}>
        <button className={styles.primaryButton}>Primary Button</button>
        <button className={styles.secondaryButton}>Secondary Button</button>
        <button className={styles.outlineButton}>Outline Button</button>
      </section>

      <footer className={styles.footer}>
        <p>Background and text colors are also part of the theme.</p>
      </footer>
    </div>
  );
};

export default Theme;

