import React, { useState } from "react";
import {
  Button,
  Card,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BgImg from "../../assets/BgImg.webp";
import { Link } from "react-router-dom";

const initialLoginFormValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialLoginFormValues,
    resolver: yupResolver(loginSchema),
  });

  const loginSubmit = (data) => {
    console.log("Login data:", data);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
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
          filter: "blur(5px)", // Adjust blur amount
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Card
          elevation={8}
          sx={{
            maxWidth: 450,
            width: "100%",
            borderRadius: 3,
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(60,60,60,0.9) 100%)",
              py: 5,
              px: 4,
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
              }}
            >
              Digitronix
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Welcome back! Please login to your account
            </Typography>
          </Box>
          <Box sx={{ p: 4 }}>
            <form onSubmit={handleSubmit(loginSubmit)}>
              <Box sx={{ mb: 3 }}>
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
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, fontWeight: 600, color: "rgba(0,0,0,0.8)" }}
                >
                  Password
                </Typography>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      error={!!errors?.password}
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
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                {errors?.password && (
                  <Typography
                    variant="caption"
                    sx={{ color: "error.main", mt: 0.5, display: "block" }}
                  >
                    {errors.password.message}
                  </Typography>
                )}
              </Box>
              <Box sx={{ textAlign: "right", mb: 3 }}>
                <Link
                  to="/forgot-password"
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "rgba(0,0,0,0.7)",
                    textDecoration: "none",
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    textTransform: "none",
                    bgcolor: "rgba(0,0,0,0.8)",
                    borderRadius: 2,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "rgba(0,0,0,1)",
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
              <Box
                sx={{
                  textAlign: "center",
                  mt: 3,
                  pt: 3,
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.6)" }}>
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    style={{
                      fontWeight: 600,
                      color: "rgba(0,0,0,0.8)",
                      textDecoration: "none",
                    }}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
