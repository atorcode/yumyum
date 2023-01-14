import HeroImage from "../HeroImage";
import HeroHeading from "../HeroHeading";
import SearchBar from "../SearchBar";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <HeroImage />
      <HeroHeading />
      <SearchBar />
    </section>
  );
};

export default Hero;
