import styles from "./Footer.module.scss";
import { FaGithub } from "react-icons/fa";
import footerImage from "../../media/spoonacular-api.png";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <img src={footerImage} alt="Spoonacular API" />
      <p>
        This application consumes the Spoonacular API but is not affiliated with
        Spoonacular in any way
      </p>
      <p>&copy; 2023 Alberto Torrigiotti</p>
      <FaGithub className={styles["github-icon"]} />
    </footer>
  );
};

export default Footer;
