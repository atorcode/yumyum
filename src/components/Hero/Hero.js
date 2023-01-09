import styles from "./Hero.module.scss";
import heroImage from "../../media/pexels-pixabay-45202.jpg";

const Hero = () => {
  return (
    <section>
      <img
        className={styles["hero-image"]}
        src={heroImage}
        alt="Chocolate dessert with fudge drizzle"
      />
    </section>
  );
};

export default Hero;
