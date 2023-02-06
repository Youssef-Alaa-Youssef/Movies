import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext/LanguageContext";

export default function Movies() {
  // ======================== Fetch ==============================
  const [movie, setMovie] = useState([]);
  const [language, setLanguage] = useContext(LanguageContext);
  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&language=${language}`
      );
      const data = await res.json();
      setMovie(data.results);
    }
    fetchData();
  }, [language]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87"
  //     )
  //     .then((mo) => setMovie(mo.data.results))
  //     .catch((err) => console.log(err));
  // }, []);

  // ======================== search ==============================

  const [Mamr, setMAmr] = useState("spider");
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "9b743af1d4fde1d65af33c40dcccce87",
          query: Mamr,
        },
      })
      .then((movi) => setMovie(movi.data.results))
      .catch((err) => console.log(err));
  }, [Mamr]);

  const search = (e) => {
    setMAmr(e.target.value);
  };

  // =============================================================

  return (
    <>
      <input
        className="form-control w-50 m-auto mb-5"
        type="search"
        placeholder="Search Movies"
        aria-label="Search"
        name="MovieSearch"
        onChange={(e) => search(e)}
      />
      <div className="container">
        <div className="row ">
          {movie.map((eachMovie) => {
            return (
              <div className="col-lg-3" key={eachMovie.id}>
                <Link
                  className="btn btn-outline-light mb-2"
                  to={`/detail/${eachMovie.id}`}
                >
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "60vh" }}
                  >
                    <div className="row">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${eachMovie.poster_path}`}
                        alt="Movie"
                        width={"100%"}
                      />

                      <h1 className="p-2">{eachMovie.title}</h1>
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

      <nav aria-label="Page navigation example w-50 ">
        <ul className="pagination d-flex -center justify-content-center mt-5">
          <li className="page-item">
            <Link className="page-link" to={"/paginate"}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
