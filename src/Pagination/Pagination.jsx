import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Pagination() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    Movie();
  }, []);

  function Movie() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page=2"
      )
      .then((movie) => setMovie(movie.data.results))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container text-white">
        <div className="row">
          {movie.map((eachMovie, index) => {
            return (
              <div className="col-lg-3" key={index}>
                <Link
                  className="btn btn-outline-light mb-2"
                  to={`/detail/${eachMovie.id}`}
                >
                  {/* <Card
                    image={eachMovie.poster_path}
                    title={eachMovie.title}
                    desc={eachMovie.original_title}
                    rate={eachMovie.vote_average}
                    id={eachMovie.id}
                  /> */}
                  <div
                    className="position-relative overflow-hidden d-flex"
                    style={{ height: "650px" }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${eachMovie.poster_path}`}
                      alt="Movie"
                      width={"100%"}
                    />
                    <div className="content">
                      <h1 className="p-2">{eachMovie.title}</h1>
                      <p className="p-2">{eachMovie.original_title}</p>
                    </div>
                    <p className="position-absolute top-0 p-2 bg-white text-dark">
                      {eachMovie.vote_average}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
