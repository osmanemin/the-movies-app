import React from "react";
import slug from 'slug';
import getConfig from "next/config";

import { Context } from "../../store/Context";

import Movie from "../../components/templates/Movie/Movie";

export default function movie({ character }) {
  return (
    <Context.Provider value={{ character }}>
      <Movie/>
    </Context.Provider>
  );
}

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.themoviedb.org/3/list/1?api_key=${publicRuntimeConfig.accessKey}`
  );
  const movies = await res.json();

  const paths = movies.items.map((movie) => {
    return { params: { movie: `${slug(movie.title)}-${movie.id}` } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.movie.split("-").slice(-1)
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${publicRuntimeConfig.accessKey}`
  );

  const character = await res.json();

  return {
    props: {
      character,
    },
  };
}
