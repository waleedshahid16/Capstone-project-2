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
import { Link } from "react-router-dom";
import BgImg from "../../assets/BgImg.webp";

const initialSignupFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signupSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialSignupFormValues,
    resolver: yupResolver(signupSchema),
  });

  const signupSubmit = (data) => {
    console.log("Signup data:", data);
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
          p: { xs: 2, sm: 3 },
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
              Create your account and start shopping
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 3, sm: 4 } }}>
            <form onSubmit={handleSubmit(signupSubmit)}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, fontWeight: 600, color: "rgba(0,0,0,0.8)" }}
                >
                  Full Name
                </Typography>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="John Doe"
                      error={!!errors?.name}
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
                {errors?.name && (
                  <Typography
                    variant="caption"
                    sx={{ color: "error.main", mt: 0.5, display: "block" }}
                  >
                    {errors.name.message}
                  </Typography>
                )}
              </Box>
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
              <Box sx={{ mb: 3 }}>
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
                              onClick={() => setShowPassword(!showPassword)}
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
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, fontWeight: 600, color: "rgba(0,0,0,0.8)" }}
                >
                  Confirm Password
                </Typography>
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      error={!!errors?.confirmPassword}
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
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              edge="end"
                            >
                              {showConfirmPassword ? (
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
                {errors?.confirmPassword && (
                  <Typography
                    variant="caption"
                    sx={{ color: "error.main", mt: 0.5, display: "block" }}
                  >
                    {errors.confirmPassword.message}
                  </Typography>
                )}
              </Box>
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
                Sign Up
              </Button>
              <Box
                sx={{
                  textAlign: "center",
                  mt: 3,
                  pt: 3,
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.6)" }}>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    style={{
                      fontWeight: 600,
                      color: "rgba(0,0,0,0.8)",
                      textDecoration: "none",
                    }}
                  >
                    Login
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

export default Signup;
