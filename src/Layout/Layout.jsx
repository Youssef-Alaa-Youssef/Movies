import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}
