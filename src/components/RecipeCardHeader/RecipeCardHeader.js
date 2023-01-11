import styles from "./RecipeCardHeader.module.scss";

const RecipeCardHeader = () => {
  return (
    <header className={styles["header"]}>
      {/* Research if multiple h1s on a page are still bad for SEO. Regardless, this will be rendered in a separate page later */}
      <h1>Mushroom Risotto</h1>
      <p>for 2 servings &#183; ready in 35 minutes</p>
    </header>
  );
};

export default RecipeCardHeader;
