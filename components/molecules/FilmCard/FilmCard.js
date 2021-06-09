import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { connect } from "react-redux";

import styles from "./filmCard.module.css";

import VoteAverage from "../VoteAverage/VoteAverage";
import { FilmPosterOfList } from "../../atoms/Images/Images";
import { TitleSm } from "../../atoms/Texts/Texts";
import { addToList, deleteFromList } from "../../../actions/actions";

const FilmCard = ({
  poster_path,
  original_title,
  vote_average,
  id,
  favoritesList,
  addToList,
  deleteFromList,
}) => {
  const [addIcon, setAddIcon] = useState("/plus.svg");

  useEffect(() => {
    favoritesList.map((movie) => {
      if (movie.id == id) {
        setAddIcon("/negative.svg");
      }
    });
  }, [favoritesList]);

  const clickHandle = () => {
    if (addIcon === "/plus.svg") {
      addToList({ poster_path, original_title, vote_average, id });
      setAddIcon("/negative.svg");
    } else {
      deleteFromList({ poster_path, original_title, vote_average, id });
      setAddIcon("/plus.svg");
    }
  };

  useEffect(() => {
      setTimeout(function () {
        localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
      }, 100);
  }, [favoritesList]);

  return (
    <div className={styles.card}>
      <Link
        href={{
          pathname: "movies/movie",
          query: { id },
        }}
      >
        <a>
          <div className={styles.movieImgContainer}>
            <FilmPosterOfList src={poster_path} />
            <VoteAverage
              className={styles.voteAverage}
              voteAverage={vote_average}
            />
          </div>
        </a>
      </Link>
      <div className={styles.titleBar}>
        <TitleSm className={styles.title} title={original_title} />
        <Image
          onClick={() => {
            clickHandle();
          }}
          className={styles.plusButton}
          src={addIcon}
          width={20}
          height={20}
        ></Image>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoritesList: state.favoritesList,
  };
};

export default connect(mapStateToProps, { addToList, deleteFromList })(
  FilmCard
);
