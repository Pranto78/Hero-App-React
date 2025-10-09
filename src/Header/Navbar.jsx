import React from "react";
import { NavLink, useNavigation } from "react-router";
import LogoImg from "../assets/logo.png";
import GitLogo from "../assets/Vector.png";

const Navbar = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const links = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "m-2 text-[#9F62F2] underline underline-offset-4 font-semibold"
            : "m-2 text-gray-700 hover:text-[#9F62F2]"
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/all-apps"
        className={({ isActive }) =>
          isActive
            ? "m-2 text-[#9F62F2] underline underline-offset-4 font-semibold"
            : "m-2 text-gray-700 hover:text-[#9F62F2]"
        }
      >
        <li>Apps</li>
      </NavLink>

      <NavLink
        to="/installation"
        className={({ isActive }) =>
          isActive
            ? "m-2 text-[#9F62F2] underline underline-offset-4 font-semibold"
            : "m-2 text-gray-700 hover:text-[#9F62F2]"
        }
      >
        <li>Installation</li>
      </NavLink>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <a href="/" className="btn btn-ghost text-xl">
            <img className="h-[40px] w-[40px]" src={LogoImg} alt="" />
            <span className="text-[#9F62F2] font-bold ml-1">HERO.IO</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          <a href="https://github.com/Pranto78" target="blank" className="btn bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition">
            <img src={GitLogo} alt="" /> Contribute
          </a>
        </div>
      </div>

      {/* ✅ Fullscreen overlay spinner while loading */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[9999] transition-opacity duration-300">
          <span className="loading loading-infinity loading-2xl text-[#9F62F2] text-7xl scale-300"></span>
        </div>
      )}
    </>
  );
};

export default Navbar;
