import React from "react";
import Image from "next/image";

export const FilmPosterOfList = ({href}) => {
  return (
    <div>
      <Image
        className="avatar_668"
        src={`http://image.tmdb.org/t/p/w500${href}`}
        width={200}
        height={250}
      />
      <style>{`
        .avatar_668 {
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export const Star = () => {
  return (
      <Image
            src="/star.svg"
            width={10}
            height={10}/>
  );
};
