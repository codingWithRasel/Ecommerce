import React from "react";
import logo from "../assets/logo.png";
import card from "../assets/cart_icon.png";

import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/CategoryContext";

const Navbar = () => {
  const { cartArray } = useAppContext();
  return (
    <div className="shadow">
      <div className=" flex justify-between max-w-[1562px] mx-auto items-center py-3 px-5">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} alt="logo" />
          <p className=" text-3xl font-semibold">SHOPPER</p>
        </div>
        <nav>
          <ul className=" flex gap-10  text-lg font-semibold">
            <NavLink
              className=" aria-[current=page]:text-red-400  aria-[current=page]:font-bold"
              to="/"
            >
              Shop
            </NavLink>
            <NavLink
              className=" aria-[current=page]:text-red-400  aria-[current=page]:font-bold"
              to="/Men"
            >
              Men
            </NavLink>
            <NavLink
              className=" aria-[current=page]:text-red-400  aria-[current=page]:font-bold"
              to="/women"
            >
              Women
            </NavLink>
            <NavLink
              className=" aria-[current=page]:text-red-400  aria-[current=page]:font-bold "
              to="/kid"
            >
              Kids
            </NavLink>
          </ul>
        </nav>
        <div className="flex items-center gap-7">
          <div>
            <NavLink to={"./SignIn"}>
              {" "}
              <button
                className={
                  " text-xl border-gray-700 w-32 h-12 rounded-full border-[1px]"
                }
              >
                Sign In
              </button>
            </NavLink>
          </div>
          <NavLink to={"/Cart"}>
            <div className="relative">
              <img src={card} alt="cart" />
              <span className=" absolute -top-3 -right-3 flex justify-center items-center text-lg text-white rounded-full bg-red-400 w-6 h-6">
                {cartArray.length}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
