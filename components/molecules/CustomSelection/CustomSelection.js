import React, { useState } from "react";

import styles from "./customSelection.module.css";

import CustomOption from "../../atoms/CustomOption/CustomOption";

export default function CustomSelection({ title, setSortType, values }) {
  const [sortBy, setSortBy] = useState("default");

  const [displayOptions, setDisplayOptions] = useState("none");

  const [arrowDirection, setArrowDirection] = useState("");

  const sortingTypeChange = (value) => {
    setSortType(value);
    setSortBy(value);
  };

  const handleClick = () => {
    if (displayOptions === "none") {
      setDisplayOptions("block");
      setArrowDirection("rotate(180deg) translateY(5px)");
    } else {
      setDisplayOptions("none");
      setArrowDirection("");
    }
  };

  return (
    <div className={styles.container}>
      <div style={{display: `${displayOptions}`}} onClick={() => handleClick()} className={styles.transparentArea}></div>
      <label className={styles.title}>{title}</label>
      <div onClick={() => handleClick()} className={styles.select}>
        <p>{sortBy}</p>
        <div
          style={{ transform: `${arrowDirection}` }}
          className={styles.arrowBottom}
        ></div>
        <div
          className={styles.optionsContainer}
          style={{ display: `${displayOptions}` }}
          onChange={sortingTypeChange}
        >
          {values.map((value, index) => {
            return (
              <CustomOption
                sortingTypeChange={sortingTypeChange}
                key={index}
                text={value}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
