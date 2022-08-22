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
    <section className="flex flex-col justify-center items-center border border-slate-200 rounded-lg m-4">
      <br />
      <img src={movie.image_url} alt="" width={200} />
      <h1 className="text-2xl font-medium text-center">{movie.title}</h1>
      <br />

      <div className="mx-4">
        <p className="text-left">{shortDescription(movie.description)}</p>
        <br />
        <p>{movie.rating}</p>
        <span>{turnMintuesToHours(movie.runtime_in_minutes)}</span>
      </div>
    </section>
  );
};

export default Movie;
