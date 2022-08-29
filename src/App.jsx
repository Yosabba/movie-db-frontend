import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import Home from "./pages/Home";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://serene-peak-15457.herokuapp.com/movies/"
      );
      const {
        data: { data },
      } = response;

      setData(data);
      setIsDataFetched(true);
    } catch ({ message }) {
      console.log(message);
    }
  };

  const showMovies = () => {
    return data.map((movie) => {
      return <Movie key={movie.movie_id} movie={movie} />;
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/:movieId" element={<MovieDetails data={data} />} />
    </Routes>
  );
}

export default App;
