import React, { useState } from "react";
import getConfig from "next/config";

import { UserContext } from "../store/Context";
import Index from "../components/templates/Index/Index";

export default function Search({ data }) {
  const [moviesInState, setMoviesInState] = useState(data);

  return (
    <UserContext.Provider
      value={{ movies: data, moviesInState, setMoviesInState }}
    >
      <Index />
    </UserContext.Provider>
  );
}

export const getServerSideProps = async (context) => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  const data = await fetch(
    `${serverRuntimeConfig.baseDomain}/api/search?q=${context.query.q}`
  ).then((res) => res.json());
  return { props: { data } };
};
