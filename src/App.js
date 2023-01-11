import "./App.scss";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div className="App">
      {/* {data && <h1>{data.title}</h1>} */}
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
