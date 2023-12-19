import React from "react";
import { useAppContext } from "../context/CategoryContext";
import dropdownIcon from "../assets/dropdown_icon.png";
import Item from "../components/Item";

const ShopCategory = (props) => {
  const { products } = useAppContext();
  return (
    <div className=" max-w-[1562px] mx-auto">
      <div className=" my-5">
        <img className="border" src={props.banner} alt={props.category} />
      </div>
      <div
        className="my-5 px-5
       flex justify-between"
      >
        <p className=" text-lg"> Showing 1-12 out of {products.length} </p>
        <div className="ring text-lg ring-gray-200 px-3 py-1 rounded-full font-semibold">
          Sort by
          <img className="inline ml-1" src={dropdownIcon} alt="dropdown" />
        </div>
      </div>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10  justify-items-center">
        {products.map((item) => {
          if (item.category === props.category) {
            return <Item key={item.id} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
