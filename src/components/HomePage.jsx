// src/components/HomePage.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";
import { Snackbar } from "@mui/material";

export default function HomePage() {
  const { products: productsDummyData } = useSelector((s) => s.cart);
  const { searchTerm, filterCategory } = useSelector((s) => s.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [expandedProducts, setExpandedProducts] = useState({});
  const maxLength = 80;

  const filteredProducts = productsDummyData.filter((p) => {
    const matchSearch = searchTerm
      ? p.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const matchFilter =
      filterCategory === "all" || p.category === filterCategory;
    return matchSearch && matchFilter;
  });

  const toggleReadMore = (id) =>
    setExpandedProducts((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div
      id="products-section"
      className="w-full px-4 sm:px-6 lg:px-24 xl:px-48 py-6"
    >
      <h2 className="text-center font-bold bg-clip-text text-transparent bg-black mb-6 text-2xl md:text-3xl lg:text-4xl">
        Featured Products
      </h2>

      {/* Grid: 1 col mobile, 2 cols tablets, 4 cols laptops */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.slice(0, 4).map((product, index) => {
          const isExpanded = expandedProducts[product.id] || false;
          const description = product.description || "";
          const displayText = isExpanded
            ? description
            : description.slice(0, maxLength);
          const showBtn = description.length > maxLength;

          return (
            <div
              key={product.id}
              id={
                index === 0 && searchTerm ? `product-${product.id}` : undefined
              }
              className="flex flex-col rounded-[15px] bg-black/30 p-5 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                onClick={() => navigate(`/product/${product.id}`)}
                className="w-full h-[200px] object-contain mb-3 cursor-pointer transition-transform hover:scale-105"
              />

              <h3 className="font-semibold text-lg leading-snug line-clamp-2 mb-2">
                {product.name}
              </h3>

              <p className="text-sm text-black/75 mb-3">
                {displayText}
                {showBtn && !isExpanded && "..."}
              </p>

              {showBtn && (
                <button
                  onClick={() => toggleReadMore(product.id)}
                  className="text-sm font-semibold text-black/70 hover:text-black mb-3 text-left"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}

              <div className="mt-auto flex items-center justify-between gap-2">
                <span className="font-bold text-lg text-black/90">
                  RS {product.price}
                </span>

                <button
                  onClick={() => {
                    dispatch(
                      addToCart(
                        productsDummyData.find((p) => p.id === product.id)
                      )
                    );
                    setOpenSnackbar(true);
                  }}
                  className="inline-flex items-center rounded-full border border-black px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-black hover:text-white"
                >
                  <AddShoppingCartIcon className="mr-2" fontSize="small" />
                  <span className="hidden sm:inline">Cart</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Item added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/products")}
          className="text-white bg-black/70 hover:bg-black px-7 md:px-8 py-2.5 rounded-md font-semibold transition-colors"
        >
          View More Products
        </button>
      </div>
    </div>
  );
}
