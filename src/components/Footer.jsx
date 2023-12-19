import React from "react";
import logo from "../assets/logo_big.png";
import whatsap from "../assets/whatsapp_icon.png";
import pinterest from "../assets/pintester_icon.png";
import instagram from "../assets/instagram_icon.png";

const Footer = () => {
  return (
    <div>
      <div className=" max-w-[1562px] mx-auto my-16 flex flex-col gap-10 px-5">
        <div className=" text-3xl flex justify-center items-center gap-3">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <div className=" flex justify-center items-center">
          <ul className=" flex gap-5">
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Offices</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div
          className=" flex
         justify-center items-center"
        >
          <ul className=" flex gap-6">
            <li>
              <a href="#">
                <img src={whatsap} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pinterest} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <hr className=" max-w-[1562px] border-t-2 border-gray-600" />
          <p className=" text-center mt-10">
            {" "}
            Copyright &copy;2024 - All Right Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
