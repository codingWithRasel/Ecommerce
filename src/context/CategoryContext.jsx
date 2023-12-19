import React, { createContext, useContext, useState } from "react";
import all_product from "../assets/all_product";
// Create Context object.
const AppContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = ({ children }) => {
  const [products, setProduct] = useState(all_product);
  const [cartArray, setCartArray] = useState([]);
  const handleChange = (item, d) => {
    let ind = -1;
    cartArray.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cartArray;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCartArray([...tempArr]);
  };

  const addCart = (item) => {
    const AlreadyExist = cartArray.map((cart) => cart.id).includes(item.id);
    if (!AlreadyExist) {
      setCartArray((prev) => [...prev, item]);
    }
  };
  return (
    <AppContext.Provider
      value={{
        products,
        setProduct,
        addCart,
        cartArray,
        setCartArray,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to use the AppContext, this is a must when using Context
export const useAppContext = () => {
  return useContext(AppContext);
};
