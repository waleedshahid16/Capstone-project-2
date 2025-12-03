import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";

// Eager load Layout and Home since they're always needed
import Layout from "./components/Layout";
import Home from "./components/Home";

// Lazy load other routes
const Products = lazy(() => import("./components/Products"));
const ProductDetailPage = lazy(() => import("./components/ProductDetailPage"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ShippingPolicy = lazy(() => import("./components/ShippingPolicy"));
const ReturnPolicy = lazy(() => import("./components/ReturnPolicy"));
const Checkout = lazy(() => import("./components/Checkout"));
const Login = lazy(() => import("./components/auth/Login"));
const Signup = lazy(() => import("./components/auth/Signup"));
const ContactUs = lazy(() => import("./components/auth/ContactUs"));

// Loading fallback component
const LoadingFallback = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh",
    }}
  >
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
