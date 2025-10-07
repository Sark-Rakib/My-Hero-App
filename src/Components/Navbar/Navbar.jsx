import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import Github from "../../assets/GitHub_png.png";

const Navbar = () => {
  return (
    <div className="max-w-[1280px] mx-auto navbar">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <a className=" flex items-center text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
          <img className="h-10 w-10" src={logo} /> HERO.IO
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apps">Apps</NavLink>
          </li>
          <li>
            <NavLink to="/installation">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          <img className="h-5 w-5" src={Github} /> Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
