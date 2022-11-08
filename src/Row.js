import React, { useEffect } from "react";
import { useState } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // useEffect(() => {
  //   const row = document.getElementById(title);

  //   function scroll(e) {
  //     e.preventDefault();
  //     if (e.deltaY > 0) {
  //       row.scrollLeft += 80;
  //     } else {
  //       row.scrollLeft -= 0;
  //     }
  //   }
  //   row.addEventListener("wheel", scroll);

  //   return () => row.removeEventListener("wheel", scroll);
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    const response = fetchData();
    if (!response.ok) {
    }
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url) => {
          //console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          //setTrailerUrl("missing");
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters" id={title}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                className={`row_poster ${isLargeRow ? "row_poster_large" : ""}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie?.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
