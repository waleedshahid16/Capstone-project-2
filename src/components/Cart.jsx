import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, ButtonGroup, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, deleteFromCart } from "../store/slices/cartSlice";

export default function Cart({ open, onClose }) {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const totalPrice = cartList
    .reduce((prev, curr) => {
      return (curr.quantity || 0) * (curr.price || 0) + prev;
    }, 0)
    .toFixed(2);

  const totalItems = cartList.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: { xs: "100vw", sm: 400, md: 450 },
          maxWidth: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f9fafb",
        }}
        role="presentation"
      >
        {/* Header */}
        <Box
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 1.5 } }}>
            <ShoppingCartOutlinedIcon sx={{ fontSize: { xs: 24, sm: 26, md: 28 } }} />
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: "bold", 
                  lineHeight: 1.2,
                  fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" }
                }}
              >
                Shopping Cart
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  opacity: 0.8,
                  fontSize: { xs: "0.7rem", sm: "0.75rem" }
                }}
              >
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </Typography>
            </Box>
          </Box>
          <IconButton 
            onClick={onClose} 
            sx={{ 
              color: "white",
              p: { xs: 0.5, sm: 1 }
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>
        </Box>

        {/* Cart Items */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: { xs: 1.5, sm: 2 },
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
            },
          }}
        >
          {cartList?.length ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.5, sm: 2 } }}>
              {cartList.map((product) => (
                <Card
                  key={product.id}
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    borderRadius: { xs: 1.5, sm: 2 },
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 1.5, sm: 2 }, "&:last-child": { pb: { xs: 1.5, sm: 2 } } }}>
                    <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2 } }}>
                      {/* Product Image */}
                      <Box
                        sx={{
                          width: { xs: 70, sm: 80, md: 90 },
                          height: { xs: 70, sm: 80, md: 90 },
                          flexShrink: 0,
                          borderRadius: { xs: 1.5, sm: 2 },
                          backgroundColor: "#f5f5f5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={product?.image}
                          alt={product?.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>

                      {/* Product Details */}
                      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            mb: 0.5,
                            lineHeight: 1.3,
                            color: "#1a1a1a",
                            pr: { xs: 4, sm: 5 },
                            fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                          }}
                        >
                          {product?.name}
                        </Typography>
                        
                        {/* Delete Button - Top Right */}
                        <IconButton
                          onClick={() => dispatch(deleteFromCart(product))}
                          sx={{
                            position: "absolute",
                            top: { xs: -10, sm: -8 },
                            right: { xs: -10, sm: -8 },
                            color: "#ef4444",
                            backgroundColor: "rgba(239, 68, 68, 0.1)",
                            border: "1px solid rgba(239, 68, 68, 0.3)",
                            width: { xs: 28, sm: 30, md: 32 },
                            height: { xs: 28, sm: 30, md: 32 },
                            "&:hover": {
                              backgroundColor: "#ef4444",
                              color: "white",
                              transform: "scale(1.1)",
                            },
                            transition: "all 0.2s",
                          }}
                        >
                          <DeleteOutlineIcon sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }} />
                        </IconButton>
                        
                        <Typography
                          variant="h6"
                          sx={{
                            color: "rgba(0, 0, 0, 0.8)",
                            fontWeight: "bold",
                            mb: { xs: 0.5, sm: 1 },
                            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                          }}
                        >
                          RS {product?.price}
                        </Typography>

                        {/* Quantity Controls */}
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
                          <ButtonGroup
                            size="small"
                            variant="outlined"
                            sx={{
                              "& .MuiButton-root": {
                                borderColor: "rgba(0, 0, 0, 0.2)",
                                minWidth: { xs: "30px", sm: "34px", md: "36px" },
                                height: { xs: "30px", sm: "34px", md: "36px" },
                                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                              },
                            }}
                          >
                            <Button
                              onClick={() => dispatch(removeFromCart(product))}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                                },
                              }}
                            >
                              <RemoveIcon sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }} />
                            </Button>
                            <Button
                              disabled
                              sx={{
                                fontWeight: "bold",
                                color: "black !important",
                                backgroundColor: "#f5f5f5",
                              }}
                            >
                              {product.quantity}
                            </Button>
                            <Button
                              onClick={() => dispatch(addToCart(product))}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                                },
                              }}
                            >
                              <AddIcon sx={{ fontSize: { xs: 14, sm: 16, md: 18 } }} />
                            </Button>
                          </ButtonGroup>

                          <Typography
                            variant="body2"
                            sx={{
                              color: "#666",
                              fontWeight: 500,
                              fontSize: { xs: "0.75rem", sm: "0.875rem" },
                            }}
                          >
                            Subtotal: RS {(product.price * product.quantity).toFixed(2)}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
                py: { xs: 4, sm: 6, md: 8 },
                px: 2,
              }}
            >
              <ShoppingCartOutlinedIcon
                sx={{
                  fontSize: { xs: 60, sm: 70, md: 80 },
                  color: "#d1d5db",
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#6b7280",
                  fontWeight: 600,
                  mb: 1,
                  fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                }}
              >
                Your cart is empty
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#9ca3af",
                  mb: 3,
                  fontSize: { xs: "0.8rem", sm: "0.875rem" },
                }}
              >
                Add some products to get started
              </Typography>
            </Box>
          )}
        </Box>

        {/* Footer */}
        <Box
          sx={{
            p: { xs: 2, sm: 2.5, md: 3 },
            backgroundColor: "white",
            borderTop: "1px solid #e5e7eb",
            boxShadow: "0 -4px 12px rgba(0,0,0,0.05)",
          }}
        >
          {cartList?.length ? (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: { xs: 1.5, sm: 2 },
                  pb: { xs: 1.5, sm: 2 },
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    color: "#1a1a1a",
                    fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
                  }}
                >
                  Total
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "rgba(0, 0, 0, 0.9)",
                    fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.5rem" },
                  }}
                >
                  RS {totalPrice}
                </Typography>
              </Box>
              <Button
                fullWidth
                component={Link}
                to="/checkout"
                onClick={onClose}
                variant="contained"
                sx={{
                  textTransform: "none",
                  bgcolor: "rgba(0, 0, 0, 0.9)",
                  color: "white",
                  py: { xs: 1.25, sm: 1.4, md: 1.5 },
                  fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                  fontWeight: 600,
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 1)",
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  },
                  transition: "all 0.2s",
                }}
              >
                Proceed to Checkout
              </Button>
            </Box>
          ) : (
            <Button
              fullWidth
              component={Link}
              to="/products"
              onClick={onClose}
              variant="contained"
              sx={{
                textTransform: "none",
                bgcolor: "rgba(0, 0, 0, 0.9)",
                color: "white",
                py: { xs: 1.25, sm: 1.4, md: 1.5 },
                fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                fontWeight: 600,
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 1)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                },
                transition: "all 0.2s",
              }}
            >
              Browse Products
            </Button>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}