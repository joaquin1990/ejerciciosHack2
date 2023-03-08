// import { useState } from "react";
// import FilmModal from "../others/Modal";
import MovieDetail from "./MovieDetail";
import { Link } from "react-router-dom";

function Movie({ movie }) {
  // const [show, setShow] = useState(false);
  const baseURL = "https://www.themoviedb.org/t/p/w500";

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    // <div>MovieDetail</div>
    <div className="film-style p-4">
      <Link to={`movie/${movie.id}?title=${movie.title}&poster_path=${movie.poster_path}&release_date=${movie.release_date}&rating=${movie.vote_average}&overview=${movie.overview}`}>
        <img className="img-fluid rounded hover" /*onClick={handleShow}*/ variant="top" alt="film-pic" src={baseURL + movie.poster_path} />
      </Link>
      {/* <FilmModal show={show} handleClose={handleClose} movie={movie} /> */}
      {false && <MovieDetail movie={movie} />}
    </div>
  );
}

export default Movie;

// poster_path
// title
// overview
// vote_avarage
// release_date
