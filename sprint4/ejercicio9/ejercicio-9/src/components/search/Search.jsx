import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../filmContainer/movie/Movie";

function Search() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bc2a4c4dc567cc913d99788e3bd18620&language=en-US&query=${movieSearch}&page=1&include_adult=false`);
      console.log(response.data.results);
      setMovieArray(response.data.results);
    };
    getData();
  }, [movieSearch]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setMovieSearch(e.target.value);
  };

  return (
    <>
      <h2 className="text-danger m-4">Search</h2>
      <div className="w-50' p-3">
        <form action="" onSubmit={searchMovies}>
          <label htmlFor="search">Search Movies!</label>
          <input className="m-2" type="text" name="search" onChange={searchMovies} placeholder="Search..." />
          <button className="btn btn-danger w-10 d-inline" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div className="d-flex flex-wrap row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-1 justify-content-center">{movieArray.length ? movieArray.map((mov) => <Movie key={mov.id} movie={mov} />) : "There are no movies to show"}</div>
      </div>
    </>
  );
}

export default Search;
