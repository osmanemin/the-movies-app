const INITIAL_STATE = {
  favoritesList: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return { favoritesList: [...state.favoritesList, action.payload] };
    case "DELETE_FROM_LIST":
      return {
        favoritesList: [
          ...state.favoritesList.filter(
            (item) => item.id !== action.payload.id
          ),
        ],
      };
    case "ADD_ALL_FAVORITES":
      return { favoritesList: action.payload };
    default:
      return state;
  }
};
