import styles from "./RecipeCardHeader.module.scss";

const RecipeCardHeader = ({ title, servings, readyInMinutes }) => {
  return (
    <header className={styles["header"]}>
      <h1>{title}</h1>
      <p>
        for {servings} servings &#183; ready in {readyInMinutes} minutes
      </p>
    </header>
  );
};

export default RecipeCardHeader;
