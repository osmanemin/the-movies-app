import React from "react";
import Image from "next/image";

export const FilmPosterOfList = ({ href }) => {
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
  return <Image src="/star.svg" width={10} height={10} />;
};

export const MostPopular = () => {
  return <Image src="/most_popular.svg" width={30} height={30} />;
};

export const FMIcon = ({...props}) => {
  return <Image {...props} src="/icon.svg" width={230} height={127} />;
};

export const Search = () => {
  return <Image src="/search.svg" width={25} height={25} />;
};