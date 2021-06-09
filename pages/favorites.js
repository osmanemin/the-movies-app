import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Index from "../components/templates/Index/Index";
import { UserContext } from "../store/Context";

const Favorites = ({ favoritesList }) => {
  const [moviesInState, setMoviesInState] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(favoritesList);
    setMoviesInState(favoritesList);
  }, [favoritesList]);

  return (
    <UserContext.Provider value={{ movies, moviesInState, setMoviesInState }}>
      <Index />
    </UserContext.Provider>
  );
};

const mapStateToProps = (state) => {
  return {
    favoritesList: state.favoritesList,
  };
};

export default connect(mapStateToProps)(Favorites);
