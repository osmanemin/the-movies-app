import { useState } from "react";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export function getSuggestionsMovies() {
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = publicRuntimeConfig.accessKey;

  const getMoviesData = async (query) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
    );
    const moviesList = await res.json();
    moviesList.items
      ? setSuggestions(moviesList.items)
      : setSuggestions(moviesList.results);
  };

  return [suggestions, setSuggestions, getMoviesData];
}
