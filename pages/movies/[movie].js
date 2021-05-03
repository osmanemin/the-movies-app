import React from "react";
import slug from 'slug';
import unfetch from 'isomorphic-unfetch'

export default function Movie({ character }) {
  return <div>{character}</div>;
}

export async function getStaticPaths() {
  const res = await unfetch(
    "https://api.themoviedb.org/3/list/1?api_key=4d94eea6262f660053da704fae1beb92"
  );
  const movies = await res.json();

  const paths = movies?.items?.map((movie) => {
   return {params: { movie: `${slug(movie.title.toString())}-${movie.id}`}}
  });

  return { paths, fallback: false };
}



export async function getStaticProps({ params }) {
  const id = params.movie.split("-").slice(-1)[0];
  const res = await unfetch(
    `https://api.themoviedb.org/3/movie/${id}8?api_key=4d94eea6262f660053da704fae1beb92`
  );
  const character = await res.json();
  return {
    props: {
      character,
    },
  };
}
