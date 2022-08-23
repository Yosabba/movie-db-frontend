import { useParams } from "react-router-dom";

const MovieDetails = () => {

  const { movieId } = useParams();

  return (
    <div>
      <h1 className="text-2xl">Movie Details page {movieId}</h1>
    </div>
  );
};

export default MovieDetails;
