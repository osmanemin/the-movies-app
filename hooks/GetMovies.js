import { useState } from "react";
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
      ? setMovies(BubbleSort(moviesList.items))
      : setMovies(BubbleSort(moviesList.results));
  };
  return [movies, getMoviesData];
}

export function getMovieDetail() {
  const [movie, setMovies] = useState("");

  const getMoviesData = async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${publicRuntimeConfig.accessKey}`
    );
    const moviesList = await res.json();
    setMovies(moviesList);
  };

  return [movie, getMoviesData];
}
