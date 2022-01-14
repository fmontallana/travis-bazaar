import React, { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Dashboard from "./Dashboard";
import Favorites from "./Favorites";
import Login from "./Login";
import Profile from "./Profile";

function Home() {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/cart"} element={<Cart /> } />
        <Route path={"/favorites"} element={<Favorites /> } />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"*"} element={<>Error! No page found!</>  } />
      </Routes>
    </>
  );
}

export default Home;
