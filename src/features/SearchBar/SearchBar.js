import styles from "./SearchBar.module.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { fetchRecipes } from "./searchBarSlice";

import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    fetchRecipes(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    // axios
    //   .get(
    //     `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //     setData(res.data);
    //   });
  };

  return (
    // add appropriate form labels
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className={styles["search-bar-container"]}
    >
      <div className={styles["search-bar"]}>
        <FaSearch className={styles["search-icon"]} />
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className={styles["search-bar-field"]}
        />
      </div>
    </form>
  );
};

export default SearchBar;
