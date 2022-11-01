import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/header/logo.png";
import Dot from "./Components/Dot";

function Navbar() {
  let route = useLocation().pathname;
  return (
    <header>
      <nav className="flex justify-between items-center p-4">
        <div className="nav__left">
          <img className="h-20" src={logo} alt="" />
        </div>
        <div className="nav__mid flex justify-between items-center [&>*]:mx-2">
          <NavLink
            className={
              route === "/"
                ? "[&>*]:bg-primary [&>*]:h-5 [&>*]:w-5"
                : "[&>*]:bg-black"
            }
            to="/"
          >
            <Dot />
          </NavLink>
          <NavLink
            className={
              route === "/menus"
                ? "[&>*]:bg-primary [&>*]:h-5 [&>*]:w-5"
                : "[&>*]:bg-black"
            }
            to="/menus"
          >
            <Dot />
          </NavLink>
          <NavLink
            className={
              route === "/about"
                ? "[&>*]:bg-primary [&>*]:h-5 [&>*]:w-5"
                : "[&>*]:bg-black"
            }
            to="/about"
          >
            <Dot />
          </NavLink>
          <NavLink
            className={
              route === "/gallery"
                ? "[&>*]:bg-primary [&>*]:h-5 [&>*]:w-5"
                : "[&>*]:bg-black"
            }
            to="/gallery"
          >
            <Dot />
          </NavLink>
          <NavLink
            className={
              route === "/contactus"
                ? "[&>*]:bg-primary [&>*]:h-5 [&>*]:w-5"
                : "[&>*]:bg-black"
            }
            to="/contactus"
          >
            <Dot />
          </NavLink>
        </div>
        <div className="nav__right text-white [&>*]:mx-4 ">
          <NavLink className="hover:text-primary" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-primary" to="/menus">
            Menus
          </NavLink>
          <NavLink className="hover:text-primary" to="/about">
            About
          </NavLink>
          <NavLink className="hover:text-primary" to="/gallery">
            Gallery
          </NavLink>
          <NavLink className="hover:text-primary" to="/contactus">
            Conatct Us
          </NavLink>
        </div>
      </nav>
      <h1>Forget about everyone</h1>
    </header>
  );
}

export default Navbar;
