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
          {/*values.map((i) => {(
             <option value={i}>{i}</option>
          )})*/}
        <option value={values[0]}>{values[0]}</option>;
        <option value={values[1]}>{values[1]}</option>;
        <option value={values[2]}>{values[2]}</option>;
      </select>
    </div>
  );
}
