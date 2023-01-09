import styles from "./HeroHeading.module.scss";

const HeroHeading = () => {
  return (
    <header>
      <h1 className={styles["heading"]}>Find a Recipe</h1>
    </header>
  );
};

export default HeroHeading;
