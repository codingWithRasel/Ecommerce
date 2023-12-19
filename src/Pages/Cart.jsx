import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/CategoryContext";
import SingleCartItem from "../components/SingleCartItem";

const Cart = () => {
  const { cartArray } = useAppContext();
  const [price, setprice] = useState(null);
  const handlePrice = () => {
    let ans = 0;
    cartArray.map((item) => {
      ans += item.amount * item.new_price;
    });
    setprice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div className=" max-w-[1562px] mx-auto py-10">
      <div>
        {cartArray.length > 0 ? (
          <div className="w-[900px] flex items-end flex-col border">
            <div className="w-full">
              {cartArray.map((product) => (
                <SingleCartItem key={product.id} product={product} />
              ))}
            </div>
            <div className=" p-4 w-60 bg-gray-200">
              <p className="font-bold text-lg">
                Total Price: <span className=" text-red-700 ">{price}</span>{" "}
              </p>
            </div>
          </div>
        ) : (
          <h1 className=" text-4xl text-center">Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
