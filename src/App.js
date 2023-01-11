import "./App.scss";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";
// import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       setData(res.data);
  //     });
  // }, []);

  return (
    <div className="App">
      <Hero />
      {/* <div className="placeholder-body"></div> */}
      {/* Render RecipeCard here to test how it looks */}
      <RecipeCard />
      <Footer />
    </div>
  );
}

export default App;
