import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./images.module.css";

export const FilmPosterOfList = ({ href }) => {
  return (
    <div>
      <Image
        className={styles.filmPosterOfList}
        src={`http://image.tmdb.org/t/p/w500${href}`}
        width={200}
        height={250}
      />
    </div>
  );
};

export const Star = () => {
  return <Image src="/star.svg" width={10} height={10} />;
};

export const MostPopular = () => {
  return <Image src="/most_popular.svg" width={30} height={30} />;
};

export const FMIcon = ({ ...props }) => {
  return (
    <Link href="/">
      <a>
        <Image {...props} src="/icon.svg" width={230} height={127} />;
      </a>
    </Link>
  );
};

export const Search = ({ className, ...props }) => {
  return (
    <Image
      className={className}
      src="/search.svg"
      width={25}
      height={25}
      {...props}
    />
  );
};

export const MoviePoster = ({ src, ...props }) => {
  return (
    <img
      {...props}
      className={styles.moviePoster}
      src={"http://image.tmdb.org/t/p/w500" + src}
    />
  );
};

export const MovieBackdrop = ({ src, ...props }) => {
  return (
    <Image
      src={"http://image.tmdb.org/t/p/w500" + src}
      layout="fill"
      {...props}
    />
  );
};
