import styles from "./RecipeCardHeader.module.scss";

const RecipeCardHeader = ({ title, servings, readyInMinutes }) => {
  return (
    <header className={styles["header"]}>
      {/* Research if multiple h1s on a page are still bad for SEO. Regardless, this will be rendered in a separate page later */}
      <h1>{title}</h1>
      <p>
        for {servings} servings &#183; ready in {readyInMinutes} minutes
      </p>
    </header>
  );
};

export default RecipeCardHeader;
