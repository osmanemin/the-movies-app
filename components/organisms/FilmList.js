import React, { useContext } from "react";

import styles from "./filmList.module.css";

import FilmCard from "../molekules/FilmCard";
import { UserContext } from "../../store/Context";

export default function FilmList() {
  const context = useContext(UserContext);

  return (
    <div className={styles.container}>
      {context.movies?.items.map((item) => (
            <FilmCard
              key={item.id}
              href={item.poster_path}
              title={item.title}
              voteAverage={item.vote_average}
              id={item.id}
            />
      ))}
    </div>
  );
}
