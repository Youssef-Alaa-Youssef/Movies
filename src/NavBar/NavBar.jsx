import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LanguageSelector from "../Languages/LanguageSelector";

export default function Navbar() {
  const state = useSelector((state) => state);
  return (
    <nav className="navbar navbar-light navbar-fixed-top mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to={"/"}>
          Movies
        </Link>
        <div className="register">
          <Link className="btn btn-outline-light me-3" to="favourite">
            Favourites {state.count}
          </Link>
          <Link className="btn btn-outline-light me-3" to="login">
            Login
          </Link>
          <Link className="btn btn-outline-light" to="register">
            SignIn
          </Link>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
}
