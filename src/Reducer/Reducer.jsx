const InitialValue = { count: 0 };
export default function addFavurite(state = InitialValue, action) {
  const fav = action.payload;
  console.log(state);
  switch (action.type) {
    case "ADDFAVOURITE":
      return {
        add: fav,
        ...state,
      };
    case "DELETEFAVOURITE":
      return {
        add: fav,
        ...state,
      };
    default:
      return state;
  }
}
