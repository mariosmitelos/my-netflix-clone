import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Banner() {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const [movie, setMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      setMovie(randomMovie);
      return request;
    }

    fetchData();
  }, []);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {});
    }
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "top center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            {!trailerUrl ? (
              <button
                className="banner_button"
                onClick={() => handleClick(movie)}
              >
                Play
              </button>
            ) : (
              <button
                className="banner_button"
                onClick={() => setTrailerUrl("")}
              >
                Close
              </button>
            )}
            <button className="banner_button">My List</button>
          </div>

          <h1 className="banner_description">{movie?.overview}</h1>
        </div>
        <div className="banner_fadeBottom"></div>
      </header>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
}

export default Banner;
