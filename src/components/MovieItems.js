const MovieItems = (props) => {
  const i = 4;

  return (
    <div className="card mb-3 movie-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="movie-image"
            src={props.movies[i].poster}
            alt={props.movies[i].title}
          />
        </div>
        <div className="col-md-8 ">
          <div className="card-body">
            <h5 className="card-title">{props.movies[i].title}</h5>
            <p className="card-text">{props.movies[i].plot}</p>
            <p className="card-text ">
              <div>Genre: {props.movies[i].genre}</div>
              <div className="movie-runtime-released">
                <small className="text-muted">{props.movies[i].released}</small>
                <small className="text-muted">{props.movies[i].runtime}</small>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItems;
