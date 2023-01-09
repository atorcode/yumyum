import styles from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    // add appropriate form labels
    <form className={styles["search-bar-container"]}>
      <div className={styles["search-bar"]}>
        <FaSearch className={styles["search-icon"]} />
        <input type="text" className={styles["search-bar-field"]} />
      </div>
    </form>
  );
};

export default SearchBar;
