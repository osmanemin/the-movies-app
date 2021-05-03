import React from "react";
import Link from "next/link"
import slug from 'slug';

import styles from "./filmCard.module.css";

import VoteAverage from "./VoteAvarage";
import { FilmPosterOfList } from "../atoms/Images";
import { TitleSm } from "../atoms/Texts";

export default function FilmCard({ href, title, voteAverage, id }) {
  return (
    <div className={styles.card}>
      <Link href="movies/[movies]" as={`/movies/${slug(title)}-${id}`}>
        <a>
          <div className={styles.movieImgContainer}>
            <FilmPosterOfList href={href} />
            <VoteAverage voteAverage={voteAverage} />
          </div>

          <TitleSm title={title} />
        </a>
      </Link>
    </div>
  );
}
