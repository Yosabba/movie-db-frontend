import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const shortDescription = (description) => {
    if (description.length > 100) {
      return `${description.slice(0, 100)} ...`;
    }
    return description;
  };

  const turnMintuesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <section className=" cursor-pointer flex flex-col justify-center items-center border border-slate-200 rounded-lg m-4 transition ease-in-out duration-200 hover:scale-105 hover:bg-grey-200">
      <Link to={`/${movie.movie_id}`}>
        <br />
        <img
          className="mx-auto my-0"
          src={movie.image_url}
          alt=""
          width={280}
        />
        <h1 className="text-3xl font-medium text-center">{movie.title}</h1>
        <br />

        <div className="mx-4">
          <p className="text-left">{shortDescription(movie.description)}</p>
          <br />
          <p>{movie.rating}</p>
          <span>{turnMintuesToHours(movie.runtime_in_minutes)}</span>
        </div>
      </Link>
    </section>
  );
};

export default Movie;
