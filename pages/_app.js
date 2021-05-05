import { UserContext } from "../store/Context";
import { useEffect } from "react";

import "../styles/global.css";

import GetMovies from "../hooks/GetMovies";

function MyApp({ Component, pageProps }) {
  const [movies, getMovies, movieCategory, setMovieCategory] = GetMovies();


  useEffect(() => {
    getMovies();
  },[]);

  return (
    <UserContext.Provider value={{movies, getMovies, movieCategory, setMovieCategory}}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
