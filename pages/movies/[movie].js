import React from "react";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function Movie({ character }) {
  return <div>{character.id}</div>;
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.themoviedb.org/3/list/1?api_key=${publicRuntimeConfig.accessKey}`
  );
  const movies = await res.json();


  const paths = movies.items.map((movie) => {
    return { params: { movie: movie.id.toString() } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${publicRuntimeConfig.accessKey}`
  );

  const character = await res.json();
  console.log(character)
  return {
    props: {
      character,
    },
  };
}
