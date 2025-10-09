import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Github from "../../assets/GitHub_png.png";

const Navbar = () => {
  return (
    <div className="max-w-[1280px] mx-auto navbar px-4 py-2">
      {/* Navbar start */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
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
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#632EE3]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#632EE3]" : ""
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? "font-bold text-[#632EE3]" : ""
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <Link
          to="/home"
          className="flex items-center text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
        >
          <img className="h-10 w-10 ml-2" src={logo} alt="Logo" />
          HERO.IO
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "font-bold text-[#632EE3]" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? "font-bold text-[#632EE3]" : ""
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? "font-bold text-[#632EE3]" : ""
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button
          onClick={() => window.open("https://github.com/Sark-Rakib", "_blank")}
          className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center gap-1"
        >
          <img className="h-5 w-5" src={Github} alt="GitHub" /> Contribute
        </button>
      </div>
    </div>
  );
};

export default Navbar;
