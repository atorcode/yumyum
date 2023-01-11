import styles from "./RecipeCard.module.scss";
import RecipeCardHeader from "../RecipeCardHeader";
import RecipeCardIngredients from "../RecipeCardIngredients";
import RecipeCardMainImage from "../RecipeCardMainImage";
import RecipeCardSteps from "../RecipeCardSteps";
import RecipeCardAttribution from "../RecipeCardAttribution";

const RecipeCard = ({ title, servings, readyInMinutes }) => {
  return (
    // may change section tag to main later depending on which page it's rendered in
    <section className={styles["recipe-card"]}>
      <RecipeCardHeader
        title={title}
        servings={servings}
        readyInMinutes={readyInMinutes}
      />
      <RecipeCardIngredients />
      <RecipeCardMainImage />
      <RecipeCardSteps />
      <RecipeCardAttribution />
    </section>
  );
};

export default RecipeCard;
