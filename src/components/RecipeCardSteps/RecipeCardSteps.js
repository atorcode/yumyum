import styles from "./RecipeCardSteps.module.scss";

const RecipeCardSteps = ({ analyzedInstructions }) => {
  const steps = analyzedInstructions[0].steps;
  return (
    <section className={styles["step-section"]}>
      {steps.map((detailedStep) => {
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
