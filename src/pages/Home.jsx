import Movie from "../components/Movie";

const Home = ({ data }) => {
  return (
    <section className="p-2 grid grid-cols-auto-fit">
      {data.map((movie) => {
        return <Movie key={movie.movie_id} movie={movie} />;
      })}
    </section>
  );
};

export default Home;
