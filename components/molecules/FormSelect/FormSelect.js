import React from "react";

import styles from "./formSelect.module.css";

export default function FormSelect({ title, setSortType, values }) {
  const sortingTypeChange = (event) => {
    setSortType(event.target.value);
  };
  return (
    <div>
      <label className={styles.title}>{title}</label>
      <select className={styles.optionsContainer} onChange={sortingTypeChange}>
          {values.map((value) => {
             return <option value={value}>{value}</option>
          })}
      </select>
    </div>
  );
}
