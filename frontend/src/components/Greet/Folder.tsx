import styles from "./Folder.module.scss";

const Folder = ({ targetHeight }: { targetHeight: number }) => {
  const fontsize = targetHeight > 0 ? targetHeight * 0.2 : "3rem";

  return (
    <div className={styles.folder}>
      <p style={{ fontSize: fontsize }}>
        Software
        <br />
        Developer
      </p>
    </div>
  );
};

export default Folder;

