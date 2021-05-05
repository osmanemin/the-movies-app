import React from "react";

import styles from "./searchBar.module.css";

import { Search } from "../../atoms/Images/Images";
import { InputText } from "../../atoms/FormElements/FormElements";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <Search />
      <InputText className={styles.input} placeholder="Search By Title" />
    </div>
  );
}
