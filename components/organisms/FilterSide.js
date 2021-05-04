import React from "react";

import styles from "./filterSide.module.css";

import SearchBar from "../molekules/SearchBar";

export default function FilterSide() {
  return (
    <div className={styles.container}>
      <SearchBar />
    </div>
  );
}
