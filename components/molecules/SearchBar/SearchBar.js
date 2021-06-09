import React, { useState, useEffect, useRef } from "react";

import styles from "./searchBar.module.css";

import SearchBarSuggestion from "../SearchBarSuggestion/SearchBarSuggestion";
import {useDebounce} from "../../../hooks/UseDebounce";


function searchCharacters(query) {
  return fetch(
    `http://localhost:3000/api/search?q=${query}`
  ).then((res) => res.json());
}

export default function SearchBar() {

  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [displayBg, setDisplayBg] = useState("none");
  const [displayCancelButton, setDisplayCancelButton] = useState("none");
  const [displayPopup, setDisplayPopup] = useState("none");
  const [zIndex, setZIndex] = useState("0");

  // useDebounce
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(value, 300);
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        searchCharacters(debouncedSearchTerm).then((results) => {
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm] 
  );

  const handleChange = (event) => {
    setValue(event.target.value);
    event.target.value.length > 2
      ? setValue(event.target.value)
      : setValue("");
  };

  const handleSearch = () => {
    if (value !== "") {
      window.location.href = `/search?q=${value}`;
      handleCancel()
    }
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
    setDisplayPopup(display);
    display === "none" ? setZIndex("0") : setZIndex("9");
    setValue("");
  };

  const handleCancel = () => {
    setDisplays("none");
    inputRef.current.value = "";
    setValue("");
  };

 

  return (
    <div className={styles.container} style={{ zIndex: `${zIndex}0` }}>
      <div className={styles.content}>
        <img
          onClick={() => {
            handleSearch();
          }}
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
          ref={inputRef}
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
        <div style={{ display: `${displayPopup}` }} className={styles.popup}>
          {results.slice(0, 5).map((suggestion, index) => (
            <SearchBarSuggestion
              src={suggestion.poster_path}
              title={suggestion.original_title}
              key={index}
              id={suggestion.id}
            />
          ))}
        </div>
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
