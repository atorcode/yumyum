import HeroImage from "../HeroImage";
import SearchBar from "../SearchBar";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <HeroImage />
      <SearchBar />
    </section>
  );
};

export default Hero;
