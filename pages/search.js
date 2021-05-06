import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Index from "../components/templates/Index/Index";

export default function Search() {
  const router = useRouter();

  const [query, setQuery] = useState(router.query.search);

  useEffect(() => {
    setQuery(router.query.search);
  }, [router.query]);

  return <Index category={`search/movie?query=${query}&`}></Index>;
}
