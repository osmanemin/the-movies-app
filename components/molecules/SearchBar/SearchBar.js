import React, {useContext} from "react";

import styles from "./searchBar.module.css";

import { Search } from "../../atoms/Images/Images";
import { InputText } from "../../atoms/FormElements/FormElements";
import { UserContext } from "../../../store/Context" 

export default function SearchBar() {
  const context = useContext(UserContext);
  const inputRef = React.useRef();

  const filterWithMovieName = () => {
    context.setMovieCategory("search/movie?query="+inputRef.current.value+"&");
  };

  return (
    <div className={styles.container}>
      {/* <Search onClick={filterWithMovieName()} /> */}
      <img className={styles.img} onClick={()=>filterWithMovieName()} src="/search.svg" width={25} height={25} />;
      <input
        ref={(node) => (inputRef.current = node)}
        className={styles.input}
        placeholder="Search By Title"
      />
    </div>
  );
}
