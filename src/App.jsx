import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetailPage from "./components/ProductDetailPage";
import AboutUs from "./components/AboutUs";
import ShippingPolicy from "./components/ShippingPolicy";
import ReturnPolicy from "./components/ReturnPolicy";
import Checkout from "./components/Checkout";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ContactUs from "./components/auth/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="return-policy" element={<ReturnPolicy />} />
          <Route path="checkout" element={<Checkout />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
