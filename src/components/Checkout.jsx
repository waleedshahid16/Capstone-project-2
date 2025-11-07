import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
  Divider,
  Paper,
  Alert,
  Snackbar,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Payment,
  Close,
} from "@mui/icons-material";
import { deleteFromCart } from "../store/slices/cartSlice";
import BgImg from "../assets/BgImg.webp";

const checkoutSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(10, "Phone number must be at least 10 digits"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  postalCode: yup.string().required("Postal code is required"),
  paymentMethod: yup.string().required("Payment method is required"),
});

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      paymentMethod: "",
    },
    resolver: yupResolver(checkoutSchema),
  });

  const totalPrice = cartList
    .reduce((prev, curr) => {
      return (curr.quantity || 0) * (curr.price || 0) + prev;
    }, 0)
    .toFixed(2);

  const totalItems = cartList.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const shippingFee = totalPrice > 5000 ? 0 : 500;
  const finalTotal = (parseFloat(totalPrice) + shippingFee).toFixed(2);

  const handleCheckout = (data) => {
    console.log("Checkout data:", data);
    console.log("Cart items:", cartList);
    cartList.forEach((item) => {
      dispatch(deleteFromCart(item));
    });
    
    setOrderPlaced(true);
    setOpenSnackbar(true);
    
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (cartList.length === 0 && !orderPlaced) {
    return (
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Container maxWidth="sm">
          <Card
            sx={{
              p: 4,
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 3,
              boxShadow: 2,
            }}
          >
            <ShoppingCart sx={{ fontSize: 64, color: "rgba(0,0,0,0.5)", mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Your cart is empty
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 3 }}>
              Please add items to your cart before proceeding to checkout.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/products")}
              sx={{
                bgcolor: "rgba(0,0,0,0.8)",
                color: "white",
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "rgba(0,0,0,1)",
                },
              }}
            >
              Browse Products
            </Button>
          </Card>
        </Container>
      </Box>
    );
  }

  if (orderPlaced) {
    return (
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Container maxWidth="sm">
          <Card
            sx={{
              p: 4,
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 3,
              boxShadow: 2,
            }}
          >
            <Payment sx={{ fontSize: 64, color: "#4caf50", mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "#4caf50" }}>
              Order Placed Successfully!
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 3 }}>
              Thank you for your order. You will receive a confirmation email shortly.
              Redirecting to home page...
            </Typography>
          </Card>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Blurred Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)",
          zIndex: 0,
        }}
      />

      {/* Card Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="lg" sx={{ width: "100%" }}>
          <form onSubmit={handleSubmit(handleCheckout)}>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={8}>
                <Card
                  elevation={8}
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    mb: { xs: 3, md: 0 },
                  }}
                >
                  <Box
                    sx={{
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(60,60,60,0.9) 100%)",
                      py: { xs: 4, sm: 5 },
                      px: { xs: 3, sm: 4 },
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        mb: 1,
                        letterSpacing: ".2rem",
                        fontSize: { xs: "1.5rem", sm: "2rem" },
                      }}
                    >
                      Digitronix
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      }}
                    >
                      Complete your order. We're almost there!
                    </Typography>
                  </Box>
                  <Box sx={{ p: { xs: 3, sm: 4 } }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          sx={{ mb: 1, fontWeight: 600, color: "rgba(0,0,0,0.8)" }}
                        >
                          Full Name
                        </Typography>
                        <Controller
                          name="fullName"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder="John Doe"
                              error={!!errors?.fullName}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: 2,
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.fullName && (
                          <Typography
                            variant="caption"
                            sx={{ color: "error.main", mt: 0.5, display: "block" }}
                          >
                            {errors.fullName.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="body2"
                          sx={{ mb: 1, fontWeight: 600, color: "rgba(0,0,0,0.8)" }}
                        >
                          Email Address
                        </Typography>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              type="email"
                              placeholder="you@example.com"
                              error={!!errors?.email}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: 2,
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.email && (
                          <Typography
                            variant="caption"
                            sx={{ color: "error.main", mt: 0.5, display: "block" }}
                          >
                            {errors.email.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="body2"
                          sx={{ mb: 1, fontWeight: 600, color: "rgba(0,0,0,0.8)" }}
                        >
                          Phone Number
                        </Typography>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder="+92 332 5178888"
                              error={!!errors?.phone}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: 2,
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.phone && (
                          <Typography
                            variant="caption"
                            sx={{ color: "error.main", mt: 0.5, display: "block" }}
                          >
                            {errors.phone.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          sx={{ mb: 1, fontWeight: 600, color: "rgba(0,0,0,0.8)" }}
                        >
                          Address
                        </Typography>
                        <Controller
                          name="address"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder="Street address"
                              multiline
                              rows={2}
                              error={!!errors?.address}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: 2,
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.address && (
                          <Typography
                            variant="caption"
                            sx={{ color: "error.main", mt: 0.5, display: "block" }}
                          >
                            {errors.address.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="body2"
                          sx={{ mb: 1, fontWeight: 600, color: "rgba(0,0,0,0.8)" }}
                        >
                          City
                        </Typography>
                        <Controller
                          name="city"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder="Islamabad"
                              error={!!errors?.city}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: 2,
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.city && (
                          <Typography
                            variant="caption"
                            sx={{ color: "error.main", mt: 0.5, display: "block" }}
                          >
                            {errors.city.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="body2"
                          sx={{ mb: 1, fontWeight: 600, color: "rgba(0,0,0,0.8)" }}
                        >
                          Postal Code
                        </Typography>
                        <Controller
                          name="postalCode"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder="44000"
                              error={!!errors?.postalCode}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: 2,
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.postalCode && (
                          <Typography
                            variant="caption"
                            sx={{ color: "error.main", mt: 0.5, display: "block" }}
                          >
                            {errors.postalCode.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          sx={{ mb: 1, fontWeight: 600, color: "rgba(0,0,0,0.8)" }}
                        >
                          Payment Method
                        </Typography>
                        <Controller
                          name="paymentMethod"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              select
                              error={!!errors?.paymentMethod}
                              SelectProps={{
                                native: true,
                              }}
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  borderRadius: 2,
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                              }}
                            >
                              <option value="">Select payment method</option>
                              <option value="cash">Cash on Delivery</option>
                              <option value="card">Credit/Debit Card</option>
                              <option value="bank">Bank Transfer</option>
                            </TextField>
                          )}
                        />
                        {errors?.paymentMethod && (
                          <Typography
                            variant="caption"
                            sx={{ color: "error.main", mt: 0.5, display: "block" }}
                          >
                            {errors.paymentMethod.message}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Grid>

              {/* Right Column - Order Summary */}
              <Grid item xs={12} md={4}>
                <Card
                  elevation={8}
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    position: "sticky",
                    top: 20,
                    height: "fit-content",
                  }}
                >
                  <Box sx={{ p: { xs: 3, sm: 4 } }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                      <ShoppingCart sx={{ fontSize: 32, color: "rgba(0,0,0,0.8)" }} />
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        Order Summary
                      </Typography>
                    </Box>

              <Grid container spacing={2} sx={{ mb: 3 }}>
                {cartList.map((item) => (
                  <Grid item xs={6} sm={4} md={3} key={item.id}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: "rgba(0,0,0,0.02)",
                        border: "1px solid rgba(0,0,0,0.1)",
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      {/* Delete Button */}
                      <IconButton
                        onClick={() => dispatch(deleteFromCart(item))}
                        sx={{
                          position: "absolute",
                          top: 6,
                          right: 6,
                          backgroundColor: "rgba(255, 255, 255, 0.95)",
                          color: "rgba(0, 0, 0, 0.8)",
                          width: 32,
                          height: 32,
                          zIndex: 1,
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                          border: "1px solid rgba(0, 0, 0, 0.1)",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.9)",
                            color: "white",
                            transform: "scale(1.1) rotate(90deg)",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                          },
                          transition: "all 0.3s ease",
                        }}
                        aria-label="Remove item"
                      >
                        <Close sx={{ fontSize: 20, fontWeight: 600 }} />
                      </IconButton>
                      {/* Image */}
                      <Box
                        sx={{
                          width: "100%",
                          height: 120,
                          borderRadius: 2,
                          overflow: "hidden",
                          backgroundColor: "#f5f5f5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          p: 1,
                          mb: 1.5,
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                      {/* Details */}
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, flex: 1 }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600, 
                            color: "rgba(0,0,0,0.9)",
                            mb: 0.5,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "rgba(0,0,0,0.6)" }}>
                          Qty: {item.quantity} × RS {item.price}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontWeight: 700, 
                            color: "rgba(0,0,0,0.9)",
                            mt: 0.5,
                          }}
                        >
                          RS {(item.price * item.quantity).toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
                    Subtotal ({totalItems} items)
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    RS {totalPrice}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
                    Shipping
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {shippingFee === 0 ? "Free" : `RS ${shippingFee}`}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 3,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Total
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  RS {finalTotal}
                </Typography>
              </Box>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        textTransform: "none",
                        bgcolor: "rgba(0,0,0,0.8)",
                        color: "white",
                        py: 1.5,
                        fontSize: "1rem",
                        fontWeight: 600,
                        borderRadius: 2,
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,1)",
                        },
                      }}
                    >
                      Place Order
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Order placed successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Checkout;

