import React from "react";
import { Link } from "react-router-dom";
import Movies from "./Movies";

export default function Card(props) {
  return (
    <>
      <div className="position-relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.image}`}
          alt="Movie"
          width={"100%"}
        />
        <h1 className="p-2">{props.title}</h1>
        <p className="p-3">{props.desc}</p>
        <p className="position-absolute top-0 p-2 bg-white text-dark">
          {props.rate}
        </p>
      </div>
    </>
  );
}
