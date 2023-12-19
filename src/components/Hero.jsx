import React from "react";
import hand from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className=" min-h-screen bg-hero_bg sm:flex  justify-around px-5 items-center">
      <div className=" flex flex-col gap-16 ">
        <h2 className="text-3xl font-bold uppercase">New Arrivals Only</h2>
        <p className=" text-8xl font-bold">
          new <img className="inline w-20" src={hand} alt="" />
          <br />
          collections <br /> for everyone
        </p>
        <div>
          <div className=" group  flex  items-center cursor-pointer gap-3 h-12 w-60 rounded-full bg-red-500 text-lg text-white font-semibold pl-4">
            Latest Collections{" "}
            <span className="duration-300 group-hover:ml-2">
              <img src={arrow} alt="arrow" />
            </span>
          </div>
        </div>
      </div>
      <div>
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
