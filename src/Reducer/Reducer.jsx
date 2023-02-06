const InitialValue = {
  addToFavourite: [],
};
export default function addFavurite(state = InitialValue, action) {
  switch (action.type) {
    case "ADDFAVOURITE":
      return {
        ...state,
        favorites: [...state.addToFavourite, action.payload],
      };
    case "DELETEFAVOURITE":
      return {
        ...state,
        favorites: state.addToFavourite.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
