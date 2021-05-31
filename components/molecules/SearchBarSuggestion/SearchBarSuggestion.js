import React from "react";
import Link from "next/link";

import styles from "./searchBarSuggestion.module.css";

export default function SearchBarSuggestion({ title, src, id }) {
  return (
    <Link
      href={{
        pathname: "movies/movie",
        query: { id },
      }}
    >
      <a>
        <div className={styles.container}>
          <img
            className={styles.poster}
            src={`http://image.tmdb.org/t/p/w500${src}`}
          />
          <h2 className={styles.title}>{title}</h2>
        </div>
      </a>
    </Link>
  );
}
