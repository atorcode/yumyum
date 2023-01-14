import styles from "./NumberIcon.module.scss";

const NumberIcon = ({ number }) => {
  return <div className={styles["number-icon"]}>{<p>{number}</p>}</div>;
};

export default NumberIcon;
