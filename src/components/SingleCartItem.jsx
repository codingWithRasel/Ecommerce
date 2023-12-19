import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/CategoryContext";

const SingleCartItem = (props) => {
  const { id, image, name, new_price, amount } = props.product;
  const { cartArray, setCartArray, handleChange } = useAppContext();
  const removeItem = () => {
    const filtered = cartArray.filter((item) => item.id !== id);
    setCartArray(filtered);
  };

  return (
    <div>
      <div className=" flex p-3 justify-between border items-center">
        <div className="flex gap-4 items-center">
          <div className=" w-18 h-20 border">
            <img
              className=" rounded-sm h-full w-full object-cover object-top"
              src={image}
            />
          </div>
          <div className=" text-lg font-semibold">
            <p>{name}</p>
            <p className=" text-orange-500">${new_price}</p>
          </div>
        </div>
        <div
          className=" grid grid-cols-3 rounded bg-gray-100 p-3 w-32  gap-2 text-lg
          "
        >
          {/* bg-red-500 */}
          <button
            className="bg-gray-300"
            onClick={() => handleChange(props.product, -1)}
          >
            -
          </button>
          <span className=" flex items-center bg-gray-300 justify-center ">
            {amount}
          </span>
          <button
            className=" bg-gray-300 "
            onClick={() => handleChange(props.product, +1)}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={removeItem}
            className=" rounded bg-orange-600 text-white text-lg border py-2 px-3"
          >
            Remove
          </button>
        </div>
        <div>
          <p>{Number(new_price)*amount}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
