import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

export const Navbar = (props) => {
  let setisLoggedIn = props.setisLoggedIn;
  let isLoggedIn = props.isLoggedIn;

  return (
    <div className="flex justify-between item-center w-11/12 py-4 mx-auto max-w-[1160px] ">
      <NavLink to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </NavLink>

      <nav>
        <ul className="flex gap-x-6 text-richblack-100 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex justify-evenly items-center text-richblack-100 gap-x-4">
        {!isLoggedIn && (
          <NavLink to="/Login">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700">
              Login
            </button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/Signup">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700">
              Signup
            </button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700"
              onClick={() => {
                setisLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/Dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700">
              Dashboard
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};
