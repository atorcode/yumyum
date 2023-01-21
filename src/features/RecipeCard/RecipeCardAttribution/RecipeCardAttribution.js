import styles from "./RecipeCardAttribution.module.scss";

const RecipeCardAttribution = ({ creditsText }) => {
  return (
    <footer>
      <p className={styles["attribution"]}>A recipe by {creditsText}</p>
    </footer>
  );
};

export default RecipeCardAttribution;
