import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";
import "./movie.css";

function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");

  const baseURL = "https://www.themoviedb.org/t/p/w500";
  const title = new URLSearchParams(useLocation().search).get("title");
  const poster_path = new URLSearchParams(useLocation().search).get("poster_path");
  const release_date = new URLSearchParams(useLocation().search).get("release_date");
  const rating = new URLSearchParams(useLocation().search).get("rating");
  const overview = new URLSearchParams(useLocation().search).get("overview");

  const genres = movie.genres && movie.genres.map((genre) => `${genre.name} `);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`
      https://api.themoviedb.org/3/movie/${movieId}?api_key=bc2a4c4dc567cc913d99788e3bd18620&language=en-US`);

      setTimeout(() => {
        setMovie(response.data);
      }, 800);
    };
    getData();
  }, [movieId]);

  if (movie === "") {
    return (
      <div className="d-flex justify-content-center pt-5 mt-5">
        <BeatLoader color="#1a202c" size={30} />
      </div>
    );
  }
  return (
    <div>
      <div className="row">
        <div className="col-sm-4 col-md-3">
          <img className="img-fluid m-4 " /*onClick={handleShow}*/ variant="top" alt="film-pic" src={baseURL + poster_path} />
        </div>
        <div className="bg-light m-3 col-sm-7 col-md-8">
          <h1>{title}</h1>
          <p>
            <strong>Release Date:</strong> {release_date}
          </p>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
          <p className="w-75">
            <strong>Overview:</strong> {overview}
          </p>
          <p>
            <strong>Genres:</strong> {genres}
          </p>
        </div>
      </div>
      <Link to="/">
        <button className="btn btn-danger bg-transparent text-danger ms-5 fw-bold ">
          <i class="fa-solid fa-arrow-left"></i> Back
        </button>
      </Link>
    </div>
  );
}

export default MovieDetail;
