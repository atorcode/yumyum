import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    // add appropriate form labels
    <form className={styles["search-bar-container"]}>
      <input
        type="text"
        placeholder="Find a recipe"
        className={styles["search-bar"]}
      />
    </form>
  );
};

export default SearchBar;
