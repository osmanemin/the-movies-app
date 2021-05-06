import React from "react";
import Link from "next/link";
import slug from "slug";

import styles from "./filmCard.module.css";

import VoteAverage from "../VoteAvarage/VoteAvarage";
import { FilmPosterOfList } from "../../atoms/Images/Images";
import { TitleSm } from "../../atoms/Texts/Texts";

export default function FilmCard({ href, title, voteAverage, id }) {
  return (
    <div className={styles.card}>
      <Link
        href={{
          pathname: "movies/movie",
          query: { id },
        }}
        //as={`/movies/${slug(title)}-${id.toString()}`}
      >
        <a>
          <div className={styles.movieImgContainer}>
            <FilmPosterOfList href={href} />
            <VoteAverage
              className={styles.voteAverage}
              voteAverage={voteAverage}
            />
          </div>

          <TitleSm title={title} />
        </a>
      </Link>
    </div>
  );
}
