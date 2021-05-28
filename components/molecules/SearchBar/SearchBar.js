import React, { useState, useRef } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar() {
  const inputEl = useRef(null);
  const [value, setValue] = useState("");
  const [displayBg, setDisplayBg] = useState("none");
  const [displayCancelButton, setDisplayCancelButton] = useState("none");

  const handleChange = (event) => {
    setValue(event.target.value);
    event.target.value.length > 2 && adviceMovies(event.target.value);
  };

  const handleSearch = () => {
    value !== "" && (window.location.href = `/search?q=${value}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    } else if (event.key === "Escape") {
      handleCancel();
    }
  };

  const setDisplays = (display) => {
    setDisplayCancelButton(display);
    setDisplayBg(display);
  };

  const handleCancel = () => {
    setDisplays("none");
    inputEl.current.value = "";
    setValue("")
  };

  const adviceMovies = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          onClick={() => {handleSearch}}
          className={styles.img}
          src="/search.svg"
          width={25}
          height={25}
        />
        <input
          onClick={() => {
            setDisplays("block");
          }}
          type="text"
          ref={inputEl}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          className={styles.input}
          placeholder="Search By Title"
        />
        <img
          style={{ display: `${displayCancelButton}` }}
          onClick={() => {
            handleCancel();
          }}
          className={styles.closeButton}
          src="/cancel.svg"
        />
      </div>
      <div
        onClick={() => {
          handleCancel();
        }}
        style={{ display: `${displayBg}` }}
        className={styles.fullScreenBackground}
      />
    </div>
  );
}
