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
          p: { xs: 2, sm: 3, md: 4 },
          py: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <Card
          elevation={8}
          sx={{
            maxWidth: { xs: "100%", sm: 420, md: 450 },
            width: "100%",
            borderRadius: { xs: 2, sm: 3 },
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(60,60,60,0.9) 100%)",
              py: { xs: 3, sm: 4, md: 5 },
              px: { xs: 2, sm: 3, md: 4 },
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: 700,
                mb: { xs: 0.75, sm: 1 },
                letterSpacing: { xs: ".15rem", sm: ".2rem" },
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
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
              Welcome back! Please login to your account
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <form onSubmit={handleSubmit(loginSubmit)}>
              <Box sx={{ mb: { xs: 2, sm: 2.5, md: 3 } }}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    color: "rgba(0,0,0,0.8)",
                    fontSize: { xs: "0.875rem", sm: "0.95rem" },
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
                          borderRadius: 2,
                          backgroundColor: "rgba(0,0,0,0.03)",
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          "&:hover fieldset": {
                            borderColor: "rgba(0,0,0,0.6)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "rgba(0,0,0,0.8)",
                          },
                        },
                        "& input": {
                          py: { xs: 1.25, sm: 1.5 },
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
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    }}
                  >
                    {errors.email.message}
                  </Typography>
                )}
              </Box>
              <Box sx={{ mb: { xs: 1.5, sm: 2 } }}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    color: "rgba(0,0,0,0.8)",
                    fontSize: { xs: "0.875rem", sm: "0.95rem" },
                  }}
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
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          "&:hover fieldset": {
                            borderColor: "rgba(0,0,0,0.6)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "rgba(0,0,0,0.8)",
                          },
                        },
                        "& input": {
                          py: { xs: 1.25, sm: 1.5 },
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge="end"
                              sx={{ p: { xs: 0.75, sm: 1 } }}
                            >
                              {showPassword ? (
                                <VisibilityOff
                                  sx={{ fontSize: { xs: 20, sm: 24 } }}
                                />
                              ) : (
                                <Visibility
                                  sx={{ fontSize: { xs: 20, sm: 24 } }}
                                />
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
                    sx={{
                      color: "error.main",
                      mt: 0.5,
                      display: "block",
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    }}
                  >
                    {errors.password.message}
                  </Typography>
                )}
              </Box>
              <Box sx={{ textAlign: "right", mb: { xs: 2.5, sm: 3 } }}>
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
                    py: { xs: 1.25, sm: 1.5 },
                    fontSize: { xs: "0.95rem", sm: "1rem" },
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
                  mt: { xs: 2.5, sm: 3 },
                  pt: { xs: 2.5, sm: 3 },
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0,0,0,0.6)",
                    fontSize: { xs: "0.875rem", sm: "0.95rem" },
                  }}
                >
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
