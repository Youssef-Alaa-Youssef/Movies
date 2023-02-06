import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddFavourite } from "../Action/AddFavourite";

export default function Details() {
  const [detail, setDetails] = useState({});
  const parm = useParams();

  const ID = parm.id;
  console.log(ID);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const addFavurite = () => {
    dispatch(AddFavourite((state.count += 1)));
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${ID}?api_key=9b743af1d4fde1d65af33c40dcccce87`
      )
      .then((data) => setDetails(data.data))

      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="App text-white">Details</h1>
      <div className="container text-white">
        <div className="row">
          {/* <Card
              image={detail.poster_path}
              desc={detail.original_title}
              title={detail.title}
            /> */}

          <div className="col-md-6 " style={{ height: "80vh" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
              alt="Movie"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="col-md-6">
            <h1 className="p-2 ">{detail.original_title}</h1>
            <p className="p-3">{detail.title}</p>
            <p className="p-3 bg-light text-dark">
              Count Rate : {detail.release_date}
            </p>
            <p className="p-3 bg-light text-dark">
              Rate : {detail.vote_average}
            </p>
            <p className="p-3 bg-light text-dark">
              Count Rate : {detail.vote_count}
            </p>
            <button
              onClick={() => addFavurite()}
              className="btn btn-outline-light"
            >
              Add To Favuorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
