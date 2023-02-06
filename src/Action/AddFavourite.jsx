export const AddFavourite = (movie) => {
  return {
    type: "ADDFAVOURITE",
    payload: movie,
  };
};
