import styles from "./RecipeCardIngredients.module.scss";

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
    <section>
      {removeDuplicates(extendedIngredients).map((ingredient) => {
        return <p key={ingredient.id}>{ingredient.name}</p>;
      })}
    </section>
  );
};

export default RecipeCardIngredients;
