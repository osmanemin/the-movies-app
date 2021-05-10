import { useEffect, useState } from "react";
import getConfig from "next/config";

import BubbleSort from "./BubbleSort";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function GetMovies() {
  const [movies, setMovies] = useState();

  const getMoviesData = async (category) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${category}api_key=${publicRuntimeConfig.accessKey}`
    );
    const moviesList = await res.json();
    moviesList.items
      ? setMovies(moviesList.items)
      : setMovies(moviesList.results);
  };

  const sorting = () => {
    setMovies(BubbleSort(movies));
  }

  return [movies, setMovies, getMoviesData];
}

export function getMovieDetail() {
  const [movie, setMovie] = useState("");

  const getMoviesData = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${publicRuntimeConfig.accessKey}`
    );
    const moviesList = await res.json();
    setMovie(moviesList);
  };

  return [movie, getMoviesData];
}
