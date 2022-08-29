import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ data }) => {
  const { movieId } = useParams();

  const movie = data.find((movie) => movie.movie_id === parseInt(movieId));

  return (
    <section className="flex flex-col justify-center items-center m-6">
      <Link
        className=" font-medium capitalize self-start transition ease-in-out duration-500 hover:text-gray-500"
        to="/"
      >
        Back to home page
      </Link>

      <img className="w-72" src={movie.image_url} alt={movie.title} />
      <h1 className="text-5xl font-bold my-2">{movie.title}</h1>
      <p className="w-1/2">{movie.description}</p>
      <p className=" align-top ">rating: {movie.rating}</p>
    </section>
  );
};

export default MovieDetails;
