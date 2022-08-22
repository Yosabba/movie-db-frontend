import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import AddMovie from "./components/AddMovie";

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
      return <Movie key={movie.id} movie={movie} />;
    });
  };

  return (
    <section className="App p-2">
      <AddMovie />
      <div className="grid grid-cols-auto-fit">{showMovies()}</div>
    </section>
  );
}

export default App;
