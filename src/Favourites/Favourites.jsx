import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteFavourite } from "../Action/DeleteFavourite";

export default function Favuorite() {
  // ======================== Fetch ==============================
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87"
      )
      .then((mo) => setMovie(mo.data.results))
      .catch((err) => console.log(err));
  }, []);
  const addFavurite = () => {
    dispatch(DeleteFavourite(state.count > 0 && (state.count -= 1)));
  };
  return (
    <>
      <div className="container text-white">
        <div className="row ">
          {movie.map((eachMovie) => {
            return (
              <div className="col-lg-3" key={eachMovie.id}>
                <div className="position-relative ">
                  <div className="row ">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${eachMovie.poster_path}`}
                      alt="Movie"
                      width={"100%"}
                      className="position-relative mb-5"
                    />
                  </div>
                  <p className="position-absolute top-0 start-0 p-1 bg-white text-dark">
                    {eachMovie.vote_average}
                  </p>
                  <i
                    className="fa-solid fa-trash position-absolute top-0 end-0 p-2  bg-white text-dark cursor-pointer"
                    onClick={() => addFavurite()}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
