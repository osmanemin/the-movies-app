import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./images.module.css";

export const FilmPosterOfList = ({ src }) => {
  return (
    <div>
      <Image
        className={styles.filmPosterOfList}
        src={`http://image.tmdb.org/t/p/w500${src}`}
        width={200}
        height={250}
      />
    </div>
  );
};

export const Star = () => {
  return <Image src="/star.svg" width={10} height={10} />;
};

export const NavigationIcon = ({src}) => {
  return <Image src={src} width={30} height={30} />;
};

export const FMIcon = ({ ...props }) => {
  return (
    <Link href="/">
      <a>
        <Image {...props} src="/icon.svg" width={230} height={127} />
      </a>
    </Link>
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
