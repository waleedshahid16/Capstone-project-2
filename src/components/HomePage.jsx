import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";
import { useState } from "react";
import { Snackbar } from "@mui/material";

export default function ImgMediaCard() {
  const { products: productsDummyData } = useSelector((state) => state.cart);
  const { searchTerm, filterCategory } = useSelector((state) => state.search);
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [expandedProducts, setExpandedProducts] = useState({});
  const dispatch = useDispatch();

  const filteredProducts = productsDummyData.filter((prod) => {
    const matchSearch = searchTerm
      ? prod.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const matchFilter =
      filterCategory === "all" || prod.category === filterCategory;

    return matchSearch && matchFilter;
  });

  const maxLength = 80;

  const toggleReadMore = (productId) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <Box id="products-section" className="grow mx-32 ">
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          background: "black",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          justifyContent: "center",
          display: "flex",
          margin: "20px",
          fontSize: {
            xs: "1.5rem",
            sm: "1.75rem",
            md: "2rem",
            lg: "2.5rem",
            xl: "3rem",
          },
        }}
      >
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        {filteredProducts?.slice(0, 4).map((product, index) => {
          const isExpanded = expandedProducts[product.id] || false;
          const description = product.description || "";
          const displayText = isExpanded
            ? description
            : description.slice(0, maxLength);
          const shouldShowButton = description.length > maxLength;

          return (
            <Grid
              key={product.id}
              size={3}
              id={
                index === 0 && searchTerm ? `product-${product.id}` : undefined
              }
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: 2.5,
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: "15px",
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  onClick={() => {navigate(`/product/${product.id}`)}}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    mb: 2,
                  }}
                  className="cursor-pointer"
                />
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {product.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    flexGrow: 1,
                    mb: 1,
                  }}
                >
                  {displayText}
                  {shouldShowButton && !isExpanded && "..."}
                </Typography>

                {shouldShowButton && (
                  <Button
                    onClick={() => toggleReadMore(product.id)}
                    sx={{
                      textTransform: "none",
                      color: "rgba(0,0,0,0.7)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      p: 0,
                      minWidth: "auto",
                      mb: 2,
                      alignSelf: "flex-start",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "rgba(0,0,0,1)",
                      },
                    }}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </Button>
                )}

                <Box className="flex justify-between" sx={{ mt: "auto" }}>
                  <Typography variant="h6">RS {product.price}</Typography>
                  <Button
                    onClick={() => {
                      dispatch(
                        addToCart(
                          productsDummyData.find((p) => p.id === product.id)
                        )
                      );
                      setOpenSnackbar(true);
                    }}
                    sx={{
                      borderRadius: "50px",
                      border: "1px solid black",
                      color: "black",
                      textTransform: "none",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.3)",
                        borderColor: "rgba(0,0,0,0.3)",
                      },
                    }}
                  >
                    <AddShoppingCartIcon
                      sx={{
                        mr: 1,
                        color: "black",
                      }}
                    />
                    Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Item added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />

      <Box className="flex justify-center mt-8">
        <Button
          onClick={() => navigate("/products")}
          sx={{
            color: "white",
            borderColor: "black",
            backgroundColor: "rgba(0,0,0,0.1)",
            px: "28px",
            py: "12px",
            marginBottom: "30px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
            },
          }}
          variant="outlined"
        >
          View More Products
        </Button>
      </Box>
    </Box>
  );
}
