import React from "react";
import { useParams } from "react-router-dom";
import BreadCrum from "./BreadCrum";
import ProductDisplay from "./ProductDisplay";
import { useAppContext } from "../context/CategoryContext";

const Product = () => {
  const { productId } = useParams();
  const { products } = useAppContext();
  const product = products.find((product) => product.id === Number(productId));

  return (
    <div className="max-w-[1562px] mx-auto">
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
