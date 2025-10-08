import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Github from "../../assets/GitHub_png.png";

const Navbar = () => {
  return (
    <div className="max-w-[1280px] mx-auto navbar px-4">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost flex flex-col justify-between h-5 w-6 p-0"
          >
            <span className="block h-0.5 w-full bg-black"></span>
            <span className="block h-0.5 w-full bg-black"></span>
            <span className="block h-0.5 w-full bg-black"></span>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
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

        <a className="flex items-center text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
          <img className="h-10 w-10 ml-2" src={logo} /> HERO.IO
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
        <button
          onClick={() =>
            window.open("https://github.com/Sark-Rakib/My-Hero-App", "_blank")
          }
          className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex items-center gap-1"
        >
          <img className="h-5 w-5" src={Github} /> Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
