import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";

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
    <section className="App p-2">
      {isDataFetched ? (
        <div className="grid grid-cols-auto-fit">{showMovies()}</div>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
}

export default App;
