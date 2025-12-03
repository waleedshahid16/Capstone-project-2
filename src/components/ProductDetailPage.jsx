import React, { useState, useMemo, useCallback } from "react";
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
  const product = useMemo(() => products.find((p) => p.id === parseInt(id)), [products, id]);

  // Related products (same category) - memoized
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
  }, [products, product]);

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product));
    setOpenSnackbar(true);
  }, [dispatch, product]);

  const handleCloseSnackbar = useCallback(() => {
    setOpenSnackbar(false);
  }, []);

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleRelatedProductClick = useCallback((productId) => {
    navigate(`/product/${productId}`);
  }, [navigate]);

  const handleAddRelatedToCart = useCallback((e, relatedProduct) => {
    e.stopPropagation();
    dispatch(addToCart(relatedProduct));
    setOpenSnackbar(true);
  }, [dispatch]);

  if (!product) {
    return (
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
        >
          Product not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />}
        onClick={handleBack}
        sx={{
          mb: { xs: 2, sm: 3 },
          color: "rgba(0,0,0,0.7)",
          fontSize: { xs: "0.875rem", sm: "1rem" },
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
          gap: { xs: 3, sm: 4 },
          alignItems: { xs: "stretch", md: "flex-start" },
          mb: { xs: 4, sm: 6, md: 8 },
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
              p: { xs: 2, sm: 3, md: 4 },
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: { xs: 2, md: 3 },
              width: "100%",
              height: { xs: "300px", sm: "400px", md: "500px" },
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
              mb: { xs: 1.5, sm: 2 },
              backgroundColor: "rgba(0,0,0,0.8)",
              color: "white",
              fontWeight: 600,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            {product.name}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "rgba(0,0,0,0.8)",
              fontWeight: 600,
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
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
              fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            }}
          >
            Description
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 2, sm: 3 },
              lineHeight: 1.8,
              color: "rgba(0,0,0,0.7)",
              fontSize: { xs: "0.875rem", sm: "1rem" },
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
                  mb: { xs: 1.5, sm: 2 },
                  color: "rgba(0,0,0,0.8)",
                  fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                }}
              >
                Specifications
              </Typography>
              <Box
                sx={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: 2,
                  mb: { xs: 2, sm: 3 },
                }}
              >
                {product.specifications.map((spec, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "rgba(0,0,0,0.7)",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
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
            startIcon={
              <AddShoppingCartIcon
                sx={{ fontSize: { xs: 18, sm: 20, md: 22 } }}
              />
            }
            onClick={handleAddToCart}
            sx={{
              backgroundColor: "rgba(0,0,0,0.8)",
              color: "white",
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              width: { xs: "100%", sm: "auto" },
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
        <Box sx={{ mt: { xs: 6, sm: 8 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 3, sm: 4 },
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            You May Also Like
          </Typography>

          <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
            {relatedProducts.map((relatedProduct) => (
              <Grid item xs={12} sm={6} md={4} key={relatedProduct.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: { xs: 1.5, sm: 2 },
                    backgroundColor: "rgba(0,0,0,0.05)",
                    borderRadius: { xs: 2, md: 3 },
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                    },
                  }}
                  onClick={() => handleRelatedProductClick(relatedProduct.id)}
                >
                  <Box
                    component="img"
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    sx={{
                      width: "100%",
                      height: { xs: "150px", sm: "180px" },
                      objectFit: "contain",
                      mb: { xs: 1.5, sm: 2 },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                      fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                    }}
                  >
                    {relatedProduct.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      flexGrow: 1,
                      mb: { xs: 1.5, sm: 2 },
                      color: "rgba(0,0,0,0.6)",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                    }}
                  >
                    {relatedProduct.description.slice(0, 60)}...
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: "auto",
                      flexWrap: { xs: "wrap", sm: "nowrap" },
                      gap: { xs: 1, sm: 0 },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                      }}
                    >
                      RS {relatedProduct.price}
                    </Typography>
                    <Button
                      size="small"
                      onClick={(e) => handleAddRelatedToCart(e, relatedProduct)}
                      sx={{
                        minWidth: "auto",
                        p: { xs: 0.75, sm: 1 },
                        color: "rgba(0,0,0,0.7)",
                      }}
                    >
                      <AddShoppingCartIcon
                        sx={{ fontSize: { xs: 20, sm: 24 } }}
                      />
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
        onClose={handleCloseSnackbar}
        message="Item added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Box>
  );
};

export default React.memo(ProductDetailPage);
