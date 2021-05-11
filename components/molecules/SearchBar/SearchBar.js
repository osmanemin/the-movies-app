import React, { useState } from "react";
import styles from "./searchBar.module.css";

import { InputText } from "../../atoms/FormElements/FormElements";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    value !== "" &&  (window.location.href = `/search?q=${value}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>
      <img
        onClick={handleSearch}
        className={styles.img}
        src="/search.svg"
        width={25}
        height={25}
      />
      <InputText
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className={styles.input}
        placeholder="Search By Title"
      />
    </div>
  );
}
