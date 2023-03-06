import { useEffect, useState } from "react";
import axios from "axios";

export default function Film({id}) {
  const [movie, setMovie] = useState("")
  const baseURL = "https://www.themoviedb.org/t/p/w500"
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=bc2a4c4dc567cc913d99788e3bd18620&language=en-US`
      );
      console.log(response.data)
      setMovie(response.data)
    };
    getMovies();
  }, [id]);
  return (
    <div id="film">
      <p className="file-name">
        {movie.original_title} {movie.release_date}
      </p>
      <p className="rating">{movie.vote_average}</p>
      {console.log(baseURL + movie.poster_path)}
      <img src={baseURL + movie.poster_path} alt="poster" className="film-image" />
    </div>
  );
}
