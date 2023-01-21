import styles from "./RecipeCardMainImage.module.scss";

const RecipeCardMainImage = ({ title, image }) => {
  return (
    <section className={styles["image-section"]}>
      <img src={image} alt={title} />
    </section>
  );
};

export default RecipeCardMainImage;
