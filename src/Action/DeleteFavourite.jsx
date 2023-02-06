export const DeleteFavourite = (movie) => {
  return {
    type: "DELETEFAVOURITE",
    payload: movie,
  };
};
