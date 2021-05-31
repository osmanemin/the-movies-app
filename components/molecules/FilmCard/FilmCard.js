import React from "react";
import Link from "next/link";

import styles from "./filmCard.module.css";

import VoteAverage from "../VoteAvarage/VoteAvarage";
import { FilmPosterOfList } from "../../atoms/Images/Images";
import { TitleSm } from "../../atoms/Texts/Texts";

export default function FilmCard({ src, title, voteAverage, id }) {
  return (
    <div className={styles.card}>
      <Link
        href={{
          pathname: "movies/movie",
          query: { id },
        }}
      >
        <a>
          <div className={styles.movieImgContainer}>
            <FilmPosterOfList src={src} />
            <VoteAverage
              className={styles.voteAverage}
              voteAverage={voteAverage}
            />
          </div>

          <TitleSm className={styles.title} title={title} />
        </a>
      </Link>
    </div>
  );
}
