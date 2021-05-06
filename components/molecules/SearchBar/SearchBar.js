import React, { useState } from "react";
import Link from "next/link";
import styles from "./searchBar.module.css";

import { Search } from "../../atoms/Images/Images";
import { InputText } from "../../atoms/FormElements/FormElements";

export default function SearchBar() {
  const searchRef = React.useRef();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchRef.current.click();
    }
  };

  return (
    <div className={styles.container}>
      <Link
        href={{
          pathname: "/search",
          query: { search: value },
        }}
      >
        <a>
          <img
            onClick={() => {
              console.log("clicked");
            }}
            ref={searchRef}
            className={styles.img}
            src="/search.svg"
            width={25}
            height={25}
          />
        </a>
      </Link>
      <InputText
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className={styles.input}
        placeholder="Search By Title"
      />
    </div>
  );
}
