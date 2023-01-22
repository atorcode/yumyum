import styles from "./RecipeCardIngredients.module.scss";

// not working
const RecipeCardIngredients = ({ extendedIngredients }) => {
  const removeDuplicates = (arr) => {
    const result = [];
    arr.forEach((item) => {
      if (!result.includes(item.name)) {
        result.push(item);
      }
    });
    return result;
  };

  return (
    <section className={styles["ingredients"]}>
      {removeDuplicates(extendedIngredients).map((ingredient) => {
        return (
          <figure key={ingredient.id}>
            <img
              src={
                ingredient.image.includes(" ")
                  ? `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image.replace(
                      " ",
                      "-"
                    )}`
                  : `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
              }
              alt={ingredient.name}
              width="50"
              height="50"
            />
            <figcaption>{ingredient.name}</figcaption>
          </figure>
        );
      })}
    </section>
  );
};

export default RecipeCardIngredients;
