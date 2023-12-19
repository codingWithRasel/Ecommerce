import React from "react";
import arrow from "../assets/breadcrum_arrow.png";

const BreadCrum = (props) => {
  const { category, name } = props.product;
  return (
    <div className=" text-lg font-semibold py-8">
      Home <img className="mx-1 inline" src={arrow} />
      Shop <img className="mx-1 inline" src={arrow} />
      {category} <img className=" mx-1 inline" src={arrow} />
      {name}
    </div>
  );
};

export default BreadCrum;
