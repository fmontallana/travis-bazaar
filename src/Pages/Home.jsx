import React, { useState, useEffect } from "react";
import { AiOutlineSmallDash } from "react-icons/ai";
import { Outlet, Route, Routes, Link } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoutes";
import Cart from "./Cart";
import Checkout from "./Checkout";
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
        <Route element={<ProtectedRoutes isAuth={true} />}>
          <Route path={"/dashboard"} element={<Dashboard />}  />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/favorites"} element={<Favorites />}  />
          <Route path={"/profile"} element={<Profile />} />
        </Route>
        <Route path={"*"} element={<>Error! No page found! <Link to="/">Click here to back.</Link> </>} />
      </Routes>
    </>
  );
}

export default Home;
