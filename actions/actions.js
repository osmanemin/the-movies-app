export const addToList = (movie) => {
  return {
    type: "ADD_TO_LIST",
    payload: movie,
  };
};

export const deleteFromList = (movie) => {
  return {
    type: "DELETE_FROM_LIST",
    payload: movie,
  };
};

export const addAllFavorites = (movie) => {
  return {
    type: "ADD_ALL_FAVORITES",
    payload: movie,
  };
};
