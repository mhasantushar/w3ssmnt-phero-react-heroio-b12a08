import React from "react";
import { Link, NavLink } from "react-router";
import '../../src/App.css';
import appLogo from "../assets/logo.png"
import icoGithub from '../assets/ico-github.png'
import { IoIosApps } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="mx-auto w-11/12">
      <div className="bg-base-100 navbar">
        <section className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="z-1 bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content"
            >

          <li><NavLink to='/'><FaHome />Home</NavLink></li>
          <li><NavLink to='/apps'><IoIosApps />Apps</NavLink></li>
          <li><NavLink to='/installed'><RiAppsFill />Installed</NavLink></li>
            </ul>
          </div>
          <div className="flex justify-left items-center gap-2">
            <Link to='/'><img className="h-8" src={appLogo} alt="logo" /></Link>
            <Link to='/' className="font-semibold link link-primary link-hover">HEROAPP</Link>
          </div>
        </section>
        <section className="hidden lg:flex navbar-center">
          <ul className="px-1 menu menu-horizontal">

          <li><NavLink to='/'><FaHome />Home</NavLink></li>
          <li><NavLink to='/apps'><IoIosApps />Apps</NavLink></li>
          <li><NavLink to='/installed'><RiAppsFill />Installed</NavLink></li>

          </ul>
        </section>
        <section className="navbar-end">
          <a className="bg-gradient-to-br from-[#632ee3] to-[#9f62f2] rounded-md text-white btn btn-primary btn-soft" href='https://github.com/mhasantushar/' target="_blank"><img src={icoGithub} />Contribute</a>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
