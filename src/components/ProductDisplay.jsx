import React from "react";
import star from "../assets/star_icon.png";
import star_dull from "../assets/star_dull_icon.png";
import { useAppContext } from "../context/CategoryContext";

const ProductDisplay = (props) => {
  const { image, name, old_price, new_price } = props.product;
  const { addCart } = useAppContext();

  return (
    <div className="grid grid-cols-[180px_450px_450px] grid-rows-3 justify-center gap-y-3 gap-x-10 ">
      <div className="h-[200px]  overflow-hidden ">
        <img className=" object-cover h-full w-full object-top " src={image} />
      </div>
      <div className="h-[200px]  overflow-hidden ">
        <img className=" object-cover h-full w-full object-top " src={image} />
      </div>
      <div className="h-[200px]  overflow-hidden ">
        <img className=" object-cover h-full w-full object-top " src={image} />
      </div>
      <div className="col-start-2 col-end-3 row-span-3 row-start-1 row-end-4   overflow-hidden">
        <img
          className=" object-cover h-full w-full object-center-top "
          src={image}
        />
      </div>
      <div className="col-start-3 col-end-4 row-span-3 row-start-1 row-end-4 p-3">
        <div className=" flex flex-col gap-5">
          <p className=" text-2xl font-semibold "> {name}</p>
          <div>
            <img className="inline" src={star} alt="star" />
            <img className="inline" src={star} alt="star" />
            <img className="inline" src={star} alt="star" />
            <img className="inline" src={star} alt="star" />
            <img className="inline mr-3 " src={star_dull} alt="star" />
            <span>(122+)</span>
          </div>
          <div className=" text-xl font-semibold">
            <span className=" text-gray-500 line-through mr-5">
              ${old_price}
            </span>
            <span className="text-red-500 font-bold ">${new_price}</span>
          </div>
          <p className=" text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            adipisci temporibus aperiam culpa vitae explicabo totam cumque
            voluptatibus qui. Facere.
          </p>
          <div>
            <p className=" mb-4 text-lg font-semibold">Select size</p>
            <div className=" flex gap-3">
              <p className=" w-16 rounded-sm flex justify-center items-center bg-gray-200 h-16 border">
                S
              </p>
              <p className=" w-16 rounded-sm flex justify-center items-center bg-gray-200 h-16 border">
                M
              </p>
              <p className=" w-16 rounded-sm flex justify-center items-center bg-gray-200 h-16 border">
                XL
              </p>
              <p className=" w-16 rounded-sm flex justify-center items-center bg-gray-200 h-16 border">
                XXL
              </p>
            </div>
          </div>
          <div>
            <button
              className=" w-40 h-14 rounded-md bg-red-500 text-white text-xl font-semibold border"
              onClick={() => addCart(props.product)}
            >
              {" "}
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
