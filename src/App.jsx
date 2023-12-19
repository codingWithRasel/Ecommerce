import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Navbar from "./components/Navbar";
import ShopCategory from "./Pages/ShopCategory";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Error from "./components/Error";
import banner_kid from "./assets/banner_kids.png";
import banner_men from "./assets/banner_mens.png";
import banner_women from "./assets/banner_women.png";
import Item from "./components/Item";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={banner_men} />}
          />
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={banner_women} />}
          />
          <Route
            path="/kid"
            element={<ShopCategory category="kid" banner={banner_kid} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId/:productName" element={<Product />} />
          </Route>
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
