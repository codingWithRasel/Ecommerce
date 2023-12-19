import React from "react";
import { Link } from "react-router-dom";
const Item = (Props) => {
  const {id, name, old_price, new_price, image } = Props.item;
  return (
    <div className=" w-[350px] hover:scale-105 duration-300 rounded-lg shadow cursor-pointer p-3">
      <Link to={`/product/${id}/${name}`}>
        <div>
          <img className=" rounded-lg" src={image} alt="image" />
        </div>
      </Link>
      <div className=" mt-3 px-3">
        <p>{name}</p>
        <div className=" text-lg flex justify-between ">
          <p className=" font-semibold">${new_price}</p>
          <p className=" line-through">${old_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
