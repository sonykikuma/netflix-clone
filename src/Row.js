import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import instance from "./axios";

const base_url = "https://image.tmdb.org/t/p/original /"; //"https://image.tmdb.org/t/p/original/[poster_path] ";
//"https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {}
        {movies?.map((movie) => (
          //eslint-disable-next-line

          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url} ${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
