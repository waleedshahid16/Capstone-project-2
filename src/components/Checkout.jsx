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
  Alert,
  Snackbar,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Payment, Close } from "@mui/icons-material";
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
          py: { xs: 3, sm: 4, md: 5, lg: 6 },
          px: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
        }}
      >
        <Container maxWidth="sm">
          <Card
            sx={{
              p: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
              boxShadow: 2,
            }}
          >
            <ShoppingCart
              sx={{
                fontSize: { xs: 40, sm: 48, md: 56, lg: 64 },
                color: "rgba(0,0,0,0.5)",
                mb: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2 },
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2 },
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.25rem",
                  md: "1.4rem",
                  lg: "1.5rem",
                },
              }}
            >
              Your cart is empty
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                mb: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
                fontSize: {
                  xs: "0.85rem",
                  sm: "0.95rem",
                  md: "1rem",
                  lg: "1rem",
                },
              }}
            >
              Please add items to your cart before proceeding to checkout.
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/products")}
              sx={{
                bgcolor: "rgba(0,0,0,0.8)",
                color: "white",
                px: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
                py: { xs: 1, sm: 1.25, md: 1.4, lg: 1.5 },
                fontSize: {
                  xs: "0.85rem",
                  sm: "0.95rem",
                  md: "1rem",
                  lg: "1rem",
                },
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
          py: { xs: 3, sm: 4, md: 5, lg: 6 },
          px: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
        }}
      >
        <Container maxWidth="sm">
          <Card
            sx={{
              p: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
              boxShadow: 2,
            }}
          >
            <Payment
              sx={{
                fontSize: { xs: 40, sm: 48, md: 56, lg: 64 },
                color: "#4caf50",
                mb: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2 },
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2 },
                color: "#4caf50",
                fontSize: {
                  xs: "1.35rem",
                  sm: "1.5rem",
                  md: "1.85rem",
                  lg: "2.125rem",
                },
              }}
            >
              Order Placed Successfully!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                mb: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
                fontSize: {
                  xs: "0.85rem",
                  sm: "0.95rem",
                  md: "1rem",
                  lg: "1rem",
                },
              }}
            >
              Thank you for your order. You will receive a confirmation email
              shortly. Redirecting to home page...
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
          p: { xs: 1.5, sm: 2, md: 3, lg: 4 },
          py: { xs: 2.5, sm: 3, md: 4, lg: 5 },
        }}
      >
        <Container maxWidth="lg" sx={{ width: "100%" }}>
          <form onSubmit={handleSubmit(handleCheckout)}>
            <Grid
              container
              spacing={{ xs: 2.5, sm: 3, md: 3.5, lg: 4 }}
              justifyContent="center"
            >
              {/* Left Column - Checkout Form */}
              <Grid item xs={12} md={8}>
                <Card
                  elevation={8}
                  sx={{
                    borderRadius: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
                    backgroundColor: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    mb: { xs: 2.5, sm: 3, md: 0 },
                  }}
                >
                  <Box
                    sx={{
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(60,60,60,0.9) 100%)",
                      py: { xs: 2.5, sm: 3, md: 4, lg: 5 },
                      px: { xs: 1.5, sm: 2, md: 3, lg: 4 },
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        mb: { xs: 0.5, sm: 0.75, md: 0.85, lg: 1 },
                        letterSpacing: {
                          xs: ".1rem",
                          sm: ".15rem",
                          md: ".18rem",
                          lg: ".2rem",
                        },
                        fontSize: {
                          xs: "1.35rem",
                          sm: "1.5rem",
                          md: "1.75rem",
                          lg: "2rem",
                        },
                      }}
                    >
                      Digitronix
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: {
                          xs: "0.75rem",
                          sm: "0.8rem",
                          md: "0.85rem",
                          lg: "0.875rem",
                        },
                      }}
                    >
                      Complete your order. We're almost there!
                    </Typography>
                  </Box>
                  <Box sx={{ p: { xs: 1.5, sm: 2, md: 3, lg: 4 } }}>
                    <Grid
                      container
                      spacing={{ xs: 1.75, sm: 2, md: 2.5, lg: 3 }}
                    >
                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: { xs: 0.75, sm: 0.85, md: 0.9, lg: 1 },
                            fontWeight: 600,
                            color: "rgba(0,0,0,0.8)",
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
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
                                  borderRadius: {
                                    xs: 1.5,
                                    sm: 1.75,
                                    md: 1.85,
                                    lg: 2,
                                  },
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "0.875rem",
                                    md: "0.95rem",
                                    lg: "1rem",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                                "& input": {
                                  py: { xs: 1, sm: 1.15, md: 1.3, lg: 1.5 },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.fullName && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "error.main",
                              mt: 0.5,
                              display: "block",
                              fontSize: {
                                xs: "0.65rem",
                                sm: "0.7rem",
                                md: "0.72rem",
                                lg: "0.75rem",
                              },
                            }}
                          >
                            {errors.fullName.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: { xs: 0.75, sm: 0.85, md: 0.9, lg: 1 },
                            fontWeight: 600,
                            color: "rgba(0,0,0,0.8)",
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
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
                                  borderRadius: {
                                    xs: 1.5,
                                    sm: 1.75,
                                    md: 1.85,
                                    lg: 2,
                                  },
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "0.875rem",
                                    md: "0.95rem",
                                    lg: "1rem",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                                "& input": {
                                  py: { xs: 1, sm: 1.15, md: 1.3, lg: 1.5 },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.email && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "error.main",
                              mt: 0.5,
                              display: "block",
                              fontSize: {
                                xs: "0.65rem",
                                sm: "0.7rem",
                                md: "0.72rem",
                                lg: "0.75rem",
                              },
                            }}
                          >
                            {errors.email.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: { xs: 0.75, sm: 0.85, md: 0.9, lg: 1 },
                            fontWeight: 600,
                            color: "rgba(0,0,0,0.8)",
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
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
                                  borderRadius: {
                                    xs: 1.5,
                                    sm: 1.75,
                                    md: 1.85,
                                    lg: 2,
                                  },
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "0.875rem",
                                    md: "0.95rem",
                                    lg: "1rem",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                                "& input": {
                                  py: { xs: 1, sm: 1.15, md: 1.3, lg: 1.5 },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.phone && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "error.main",
                              mt: 0.5,
                              display: "block",
                              fontSize: {
                                xs: "0.65rem",
                                sm: "0.7rem",
                                md: "0.72rem",
                                lg: "0.75rem",
                              },
                            }}
                          >
                            {errors.phone.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: { xs: 0.75, sm: 0.85, md: 0.9, lg: 1 },
                            fontWeight: 600,
                            color: "rgba(0,0,0,0.8)",
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
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
                                  borderRadius: {
                                    xs: 1.5,
                                    sm: 1.75,
                                    md: 1.85,
                                    lg: 2,
                                  },
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "0.875rem",
                                    md: "0.95rem",
                                    lg: "1rem",
                                  },
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
                            sx={{
                              color: "error.main",
                              mt: 0.5,
                              display: "block",
                              fontSize: {
                                xs: "0.65rem",
                                sm: "0.7rem",
                                md: "0.72rem",
                                lg: "0.75rem",
                              },
                            }}
                          >
                            {errors.address.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: { xs: 0.75, sm: 0.85, md: 0.9, lg: 1 },
                            fontWeight: 600,
                            color: "rgba(0,0,0,0.8)",
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
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
                                  borderRadius: {
                                    xs: 1.5,
                                    sm: 1.75,
                                    md: 1.85,
                                    lg: 2,
                                  },
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "0.875rem",
                                    md: "0.95rem",
                                    lg: "1rem",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                                "& input": {
                                  py: { xs: 1, sm: 1.15, md: 1.3, lg: 1.5 },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.city && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "error.main",
                              mt: 0.5,
                              display: "block",
                              fontSize: {
                                xs: "0.65rem",
                                sm: "0.7rem",
                                md: "0.72rem",
                                lg: "0.75rem",
                              },
                            }}
                          >
                            {errors.city.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: { xs: 0.75, sm: 0.85, md: 0.9, lg: 1 },
                            fontWeight: 600,
                            color: "rgba(0,0,0,0.8)",
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
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
                                  borderRadius: {
                                    xs: 1.5,
                                    sm: 1.75,
                                    md: 1.85,
                                    lg: 2,
                                  },
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "0.875rem",
                                    md: "0.95rem",
                                    lg: "1rem",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                                "& input": {
                                  py: { xs: 1, sm: 1.15, md: 1.3, lg: 1.5 },
                                },
                              }}
                            />
                          )}
                        />
                        {errors?.postalCode && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "error.main",
                              mt: 0.5,
                              display: "block",
                              fontSize: {
                                xs: "0.65rem",
                                sm: "0.7rem",
                                md: "0.72rem",
                                lg: "0.75rem",
                              },
                            }}
                          >
                            {errors.postalCode.message}
                          </Typography>
                        )}
                      </Grid>

                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: { xs: 0.75, sm: 0.85, md: 0.9, lg: 1 },
                            fontWeight: 600,
                            color: "rgba(0,0,0,0.8)",
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
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
                                  borderRadius: {
                                    xs: 1.5,
                                    sm: 1.75,
                                    md: 1.85,
                                    lg: 2,
                                  },
                                  backgroundColor: "rgba(0,0,0,0.03)",
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "0.875rem",
                                    md: "0.95rem",
                                    lg: "1rem",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "rgba(0,0,0,0.6)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "rgba(0,0,0,0.8)",
                                  },
                                },
                                "& select": {
                                  py: { xs: 1, sm: 1.15, md: 1.3, lg: 1.5 },
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
                            sx={{
                              color: "error.main",
                              mt: 0.5,
                              display: "block",
                              fontSize: {
                                xs: "0.65rem",
                                sm: "0.7rem",
                                md: "0.72rem",
                                lg: "0.75rem",
                              },
                            }}
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
                    borderRadius: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
                    backgroundColor: "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(10px)",
                    position: { md: "sticky" },
                    top: 20,
                    height: "fit-content",
                  }}
                >
                  <Box sx={{ p: { xs: 1.5, sm: 2, md: 3, lg: 4 } }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2 },
                        mb: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
                      }}
                    >
                      <ShoppingCart
                        sx={{
                          fontSize: { xs: 24, sm: 28, md: 30, lg: 32 },
                          color: "rgba(0,0,0,0.8)",
                        }}
                      />
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          fontSize: {
                            xs: "1rem",
                            sm: "1.15rem",
                            md: "1.3rem",
                            lg: "1.5rem",
                          },
                        }}
                      >
                        Order Summary
                      </Typography>
                    </Box>

                    <Grid
                      container
                      spacing={{ xs: 1.25, sm: 1.5, md: 1.75, lg: 2 }}
                      sx={{ mb: { xs: 2, sm: 2.5, md: 2.75, lg: 3 } }}
                    >
                      {cartList.map((item) => (
                        <Grid item xs={6} sm={4} md={6} key={item.id}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              p: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2 },
                              borderRadius: {
                                xs: 1.5,
                                sm: 1.75,
                                md: 1.85,
                                lg: 2,
                              },
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
                                top: { xs: 3, sm: 4, md: 5, lg: 6 },
                                right: { xs: 3, sm: 4, md: 5, lg: 6 },
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                color: "rgba(0, 0, 0, 0.8)",
                                width: { xs: 24, sm: 28, md: 30, lg: 32 },
                                height: { xs: 24, sm: 28, md: 30, lg: 32 },
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
                              <Close
                                sx={{
                                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                                  fontWeight: 600,
                                }}
                              />
                            </IconButton>
                            {/* Image */}
                            <Box
                              sx={{
                                width: "100%",
                                height: { xs: 85, sm: 100, md: 110, lg: 120 },
                                borderRadius: {
                                  xs: 1.5,
                                  sm: 1.75,
                                  md: 1.85,
                                  lg: 2,
                                },
                                overflow: "hidden",
                                backgroundColor: "#f5f5f5",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: { xs: 0.75, sm: 0.85, md: 0.9, lg: 1 },
                                mb: { xs: 0.85, sm: 1, md: 1.25, lg: 1.5 },
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
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: { xs: 0.4, sm: 0.45, md: 0.48, lg: 0.5 },
                                flex: 1,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: 600,
                                  color: "rgba(0,0,0,0.9)",
                                  mb: { xs: 0.4, sm: 0.45, md: 0.48, lg: 0.5 },
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  fontSize: {
                                    xs: "0.8rem",
                                    sm: "0.875rem",
                                    md: "0.9rem",
                                    lg: "0.95rem",
                                  },
                                }}
                              >
                                {item.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "rgba(0,0,0,0.6)",
                                  fontSize: {
                                    xs: "0.65rem",
                                    sm: "0.7rem",
                                    md: "0.72rem",
                                    lg: "0.75rem",
                                  },
                                }}
                              >
                                Qty: {item.quantity} × RS {item.price}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{
                                  fontWeight: 700,
                                  color: "rgba(0,0,0,0.9)",
                                  mt: { xs: 0.4, sm: 0.45, md: 0.48, lg: 0.5 },
                                  fontSize: {
                                    xs: "0.85rem",
                                    sm: "0.95rem",
                                    md: "0.98rem",
                                    lg: "1rem",
                                  },
                                }}
                              >
                                RS {(item.price * item.quantity).toFixed(2)}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    <Divider
                      sx={{ my: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2 } }}
                    />

                    <Box sx={{ mb: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2 } }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: { xs: 0.65, sm: 0.75, md: 0.85, lg: 1 },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(0,0,0,0.7)",
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
                        >
                          Subtotal ({totalItems} items)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
                        >
                          RS {totalPrice}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: { xs: 0.65, sm: 0.75, md: 0.85, lg: 1 },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(0,0,0,0.7)",
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
                        >
                          Shipping
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.875rem",
                              md: "0.9rem",
                              lg: "0.95rem",
                            },
                          }}
                        >
                          {shippingFee === 0 ? "Free" : `RS ${shippingFee}`}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider
                      sx={{ my: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2 } }}
                    />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: {
                            xs: "1rem",
                            sm: "1.15rem",
                            md: "1.2rem",
                            lg: "1.25rem",
                          },
                        }}
                      >
                        Total
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontSize: {
                            xs: "1rem",
                            sm: "1.15rem",
                            md: "1.2rem",
                            lg: "1.25rem",
                          },
                        }}
                      >
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
                        py: { xs: 1, sm: 1.15, md: 1.3, lg: 1.5 },
                        fontSize: {
                          xs: "0.85rem",
                          sm: "0.95rem",
                          md: "0.98rem",
                          lg: "1rem",
                        },
                        fontWeight: 600,
                        borderRadius: { xs: 1.5, sm: 1.75, md: 1.85, lg: 2 },
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
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{
            width: "100%",
            fontSize: {
              xs: "0.8rem",
              sm: "0.875rem",
              md: "0.95rem",
              lg: "1rem",
            },
          }}
        >
          Order placed successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Checkout;
