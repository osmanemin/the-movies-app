import { useEffect } from "react";

import "../styles/global.css";

import GetMovies from "../hooks/GetMovies";

function MyApp({ Component, pageProps }) {
  const [movies, getMovies] = GetMovies();

  useEffect(() => {
    getMovies();
  },[]);

  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
