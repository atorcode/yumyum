import styles from "./RecipeCardSteps.module.scss";

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
      {console.log(steps)}
      {steps &&
        steps.map((detailedStep) => {
          return (
            <p key={detailedStep.number}>
              {detailedStep.number}. {detailedStep.step}
            </p>
          );
        })}
    </section>
  );
};

export default RecipeCardSteps;
