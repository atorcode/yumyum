import styles from "./RecipeCard.module.scss";
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardIngredients from "./RecipeCardIngredients";
import RecipeCardMainImage from "./RecipeCardMainImage";
import RecipeCardSteps from "./RecipeCardSteps";
import RecipeCardAttribution from "./RecipeCardAttribution";
// import { useSelector, useDispatch } from "react-redux";
// import { update } from "./recipeCardSlice";

const RecipeCard = ({
  title,
  servings,
  readyInMinutes,
  extendedIngredients,
  image,
  analyzedInstructions,
  creditsText,
}) => {
  return (
    // may change section tag to main later depending on which page it's rendered in
    <article className={styles["recipe-card"]}>
      <RecipeCardHeader
        title={title}
        servings={servings}
        readyInMinutes={readyInMinutes}
      />
      <RecipeCardIngredients extendedIngredients={extendedIngredients} />
      <RecipeCardMainImage title={title} image={image} />
      <RecipeCardSteps analyzedInstructions={analyzedInstructions} />
      <RecipeCardAttribution creditsText={creditsText} />
    </article>
  );
};

export default RecipeCard;
