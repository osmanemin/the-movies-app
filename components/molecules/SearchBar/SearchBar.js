import React, { useState, useRef } from "react";

import styles from "./searchBar.module.css";

import { getSuggestionsMovies } from "../../../hooks/GetMovies";
import SearchBarSuggestion from "../SearchBarSuggestion/SearchBarSuggestion";

export default function SearchBar() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [displayBg, setDisplayBg] = useState("none");
  const [displayCancelButton, setDisplayCancelButton] = useState("none");
  const [displayPopup, setDisplayPopup] = useState("none");
  const [zIndex, setZIndex] = useState("0");

  const [suggestions, clearSuggestions, setSuggestions] =
    getSuggestionsMovies();

  const handleChange = (event) => {
    setValue(event.target.value);
    event.target.value.length > 2
      ? getSuggestions(event.target.value)
      : clearSuggestions([]);
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
    clearSuggestions([]);
  };

  const handleCancel = () => {
    setDisplays("none");
    inputRef.current.value = "";
    setValue("");
  };

  const getSuggestions = (value) => {
    setDisplayPopup("block");
    setSuggestions(value);
  };

  return (
    <div className={styles.container} style={{ zIndex: `${zIndex}0` }}>
      <div className={styles.content}>
        <img
          onClick={() => {
            handleSearch;
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
          {suggestions.slice(0, 5).map((suggestion, index) => (
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
