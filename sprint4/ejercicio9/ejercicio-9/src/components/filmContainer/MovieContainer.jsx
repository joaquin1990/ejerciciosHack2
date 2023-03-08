import React from "react";
import Movie from "./movie/Movie";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import InfiniteScroll from "react-infinite-scroll-component";

function MovieContainer() {
  const [rating, setRating] = useState(0);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=bc2a4c4dc567cc913d99788e3bd18620&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&vote_average.gte=${rating}`);

      setMovies([...movies, ...response.data.results]);

      // Wait for 800miliseconds seconds before setting isLoading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };
    getData();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    console.log(rating);
    const getData = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=bc2a4c4dc567cc913d99788e3bd18620&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&vote_average.gte=${rating}`);

      setMovies(response.data.results);

      // Wait for 800miliseconds seconds before setting isLoading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };
    getData();
    // eslint-disable-next-line
  }, [rating]);

  const ratingChanged = (newRating) => {
    setPage(1);
    setRating(newRating * 2 - 2);
  };

  const filteredData = movies?.filter((film) => rating === 0 || film.vote_average >= rating);

  const fetchMore = async () => {
    setPage((page) => page + 1);
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <BeatLoader color="#1a202c" size={30} />
      </div>
    );
  }
  return (
    <>
      <div className="m-3 bg-light h-100">
        <div className="mt-3 d-flex justify-content-center align-items-center">
          <span> Filtrar por rating:</span>
          <ReactStars count={5} onChange={ratingChanged} size={24} emptyIcon={<i className="far fa-star d-inline"></i>} fullIcon={<i className="fa fa-star"></i>} activeColor="#ffd700" />
          <span>& Más</span>
        </div>
        <InfiniteScroll dataLength={filteredData.length} next={fetchMore} hasMore={true}>
          <div className="d-flex flex-wrap row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-1 justify-content-center">
            {filteredData.length > 0 ? (
              filteredData.map((movie) => {
                return <Movie key={movie.id} movie={movie} />;
              })
            ) : (
              <p className="w-100 text-center m-5 text-danger fw-bolder">"Lo sentimos no hay Peliculas con ese rating"</p>
            )}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default MovieContainer;
