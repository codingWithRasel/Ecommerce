import React from "react";
import Hero from "../components/Hero";
import allData from "../assets/all_product";
import { useAppContext } from "../context/CategoryContext";
const Shop = () => {
  const { product, setProduct } = useAppContext();
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Shop;
