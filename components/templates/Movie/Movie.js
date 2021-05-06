import React, { useContext } from "react";

import styles from "./movie.module.css";

import { Context } from "../../../store/Context";
import FilmContent from "../../organisms/FilmContent/FilmContent";
import { MoviePoster, MovieBackdrop } from "../../atoms/Images/Images";

export default function Movie() {
  const context = useContext(Context);

  return (
    <div className={styles.page}>
        <MovieBackdrop 
          className={styles.bgImg}
          src={context.movie.backdrop_path}
        />
        <div className={styles.bgColor}/>
      <div className={styles.container}>
        
        <MoviePoster src={context.movie.poster_path} />
        <FilmContent />
      </div>
    </div>
  );
}
