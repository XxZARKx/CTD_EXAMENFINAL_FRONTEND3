export const reducerDoctors = (state, action) => {
  switch (action.type) {
    case "GET_DOCTORS":
      return { ...state, dentistas: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filteredFavs };
    case "TOOGLE_THEME":
      return { ...state, theme: !state.theme };
    default:
      throw new Error("Accion no existente");
  }
};
