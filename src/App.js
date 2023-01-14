import "./App.scss";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";
import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // random recipe for testing
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setRecipe(res.data.recipes[0]);
      });
  }, []);

  return (
    <div className="App">
      <Hero />
      {/* <div className="placeholder-body"></div> */}
      {/* Render RecipeCard here to test how it looks */}
      {recipe && console.log(recipe)}
      <section className="recipe-card-section">
        {recipe && <RecipeCard {...recipe} />}
      </section>
      <Footer />
    </div>
  );
}

export default App;
