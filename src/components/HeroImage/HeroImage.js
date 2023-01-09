import heroImage from "../../media/pexels-pixabay-45202.jpg";
import styles from "./HeroImage.module.scss";
const HeroImage = () => {
  return (
    <img
      src={heroImage}
      alt="Chocolate dessert with fudge drizzle"
      className={styles["hero-image"]}
    />
  );
};

export default HeroImage;
