import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User Logged Out Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLists = (
    <>
      <div className="grid gap-32 mr-7">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/addProduct">ADD PRODUCT</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/myCart">MY CART</NavLink>
          </li>
        </ul>
        <ul>
          <li className="w-24">
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100  mx-auto bg-our-motto">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  p-2  w-52 "
            >
              <ul>
                <li className="text-red-400 font-medium">{navLists}</li>
              </ul>
            </ul>
          </div>
          <img
            src="https://i.ibb.co/xjF2qsy/4c2bf833090df394dae1d80d6aeb1ddd.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex  w-8/12">
          <ul className="menu menu-horizontal px-1 ">
            <ul>
              <li className=" Navlists grid grid-cols-4 font-medium  ">
                {navLists}
              </li>
            </ul>
          </ul>
        </div>

        <div>
          {user ? (
            <>
              <span>{user.email}</span>
              <button className="sign-out-button" onClick={handleLogOut}>
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="w-24">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
