import styles from "./RecipeCardSteps.module.scss";
import NumberIcon from "../../../components/NumberIcon";
const RecipeCardSteps = ({ analyzedInstructions }) => {
  let steps;
  if (analyzedInstructions.length < 1) {
    steps = null;
  } else if (
    !analyzedInstructions[0].hasOwnProperty("steps") ||
    analyzedInstructions[0].steps.length < 1
  ) {
    steps = null;
    // Otherwise, there are definitely steps to be rendered
  } else {
    steps = analyzedInstructions[0].steps;
  }
  return (
    <section className={styles["step-section"]}>
      {steps &&
        steps.map((detailedStep) => {
          return (
            <div
              className={styles["individual-step"]}
              key={detailedStep.number}
            >
              <NumberIcon number={detailedStep.number} />
              <p>{detailedStep.step}</p>
            </div>
          );
        })}
    </section>
  );
};

export default RecipeCardSteps;
