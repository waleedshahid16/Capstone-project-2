import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Button,
  Card,
  Grid,
  Snackbar,
  Chip,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { addToCart } from "../store/slices/cartSlice";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { products } = useSelector((state) => state.cart);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Product not found</Typography>
      </Box>
    );
  }

  // Related products (same category)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setOpenSnackbar(true);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "1400px", mx: "auto" }}>
      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{
          mb: 3,
          color: "rgba(0,0,0,0.7)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
        }}
      >
        Back
      </Button>

      {/* Product Detail Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: { xs: "stretch", md: "flex-start" },
          mb: 4,
        }}
      >
        {/* IMAGE LEFT */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            flexShrink: 0,
          }}
        >
          <Card
            sx={{
              p: 4,
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: 3,
              width: "100%",
              height: { xs: "auto", md: "500px" },
              minHeight: { xs: "300px", md: "500px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Card>
        </Box>

        {/* DETAILS RIGHT */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            flex: 1,
          }}
        >
          <Chip
            label={product.category.toUpperCase()}
            sx={{
              mb: 2,
              backgroundColor: "rgba(0,0,0,0.8)",
              color: "white",
              fontWeight: 600,
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            {product.name}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "rgba(0,0,0,0.8)",
              fontWeight: 600,
              mb: 3,
            }}
          >
            RS {product.price}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: "rgba(0,0,0,0.8)",
            }}
          >
            Description
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.8,
              color: "rgba(0,0,0,0.7)",
            }}
          >
            {product.description}
          </Typography>

          {/* Specifications */}
          {product.specifications && (
            <>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "rgba(0,0,0,0.8)",
                }}
              >
                Specifications
              </Typography>
              <Box
                sx={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  p: 2,
                  borderRadius: 2,
                  mb: 3,
                }}
              >
                {product.specifications.map((spec, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "rgba(0,0,0,0.7)",
                    }}
                  >
                    • {spec}
                  </Typography>
                ))}
              </Box>
            </>
          )}

          <Button
            variant="contained"
            size="large"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddToCart}
            sx={{
              backgroundColor: "rgba(0,0,0,0.8)",
              color: "white",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,1)",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: "center",
            }}
          >
            You May Also Like
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {relatedProducts.map((relatedProduct) => (
              <Grid item xs={12} sm={6} md={4} key={relatedProduct.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    backgroundColor: "rgba(0,0,0,0.05)",
                    borderRadius: 3,
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                    },
                  }}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <Box
                    component="img"
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    sx={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {relatedProduct.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      flexGrow: 1,
                      mb: 2,
                      color: "rgba(0,0,0,0.6)",
                    }}
                  >
                    {relatedProduct.description.slice(0, 60)}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      RS {relatedProduct.price}
                    </Typography>
                    <Button
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addToCart(relatedProduct));
                        setOpenSnackbar(true);
                      }}
                      sx={{
                        minWidth: "auto",
                        p: 1,
                        color: "rgba(0,0,0,0.7)",
                      }}
                    >
                      <AddShoppingCartIcon />
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Item added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Box>
  );
};

export default ProductDetailPage;