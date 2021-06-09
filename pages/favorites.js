import React, { useState, useEffect } from "react";

import Index from "../components/templates/Index/Index";
import { UserContext } from "../store/Context";

export default function favorites() {
  const [moviesInState, setMoviesInState] = useState([]);
  const [movies, setMovies] = useState([])
  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem("favoritesList")))
    setMoviesInState(JSON.parse(localStorage.getItem("favoritesList")));
  }, []);

  return (
    <UserContext.Provider value={{ movies, moviesInState, setMoviesInState }}>
      <Index />
    </UserContext.Provider>
  );
}
