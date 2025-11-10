import React, { useState } from "react";
import {
  Button,
  Card,
  TextField,
  Box,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import BgImg from "../../assets/BgImg.webp";

const initialContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ContactUs = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialContactFormValues,
    resolver: yupResolver(contactSchema),
  });

  const contactSubmit = (data) => {
    console.log("Contact form data:", data);
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    setSnackbarMessage(
      "Thank you for contacting us! We'll get back to you soon."
    );
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
    reset();
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
            maxWidth: { xs: "100%", sm: 550, md: 600 },
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
              Get in touch with us. We'd love to hear from you!
            </Typography>
          </Box>
          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <form onSubmit={handleSubmit(contactSubmit)}>
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
                {errors?.name && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "error.main",
                      mt: 0.5,
                      display: "block",
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    }}
                  >
                    {errors.name.message}
                  </Typography>
                )}
              </Box>

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
                  Subject
                </Typography>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      placeholder="What is this regarding?"
                      error={!!errors?.subject}
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
                {errors?.subject && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "error.main",
                      mt: 0.5,
                      display: "block",
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    }}
                  >
                    {errors.subject.message}
                  </Typography>
                )}
              </Box>

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
                  Message
                </Typography>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      rows={{ xs: 4, sm: 5, md: 6 }}
                      placeholder="Tell us more about your inquiry..."
                      error={!!errors?.message}
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
                      }}
                    />
                  )}
                />
                {errors?.message && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "error.main",
                      mt: 0.5,
                      display: "block",
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    }}
                  >
                    {errors.message.message}
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
                  py: { xs: 1.25, sm: 1.5 },
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,1)",
                  },
                }}
              >
                Send Message
              </Button>

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
                  <Link
                    to="/"
                    style={{
                      fontWeight: 600,
                      color: "rgba(0,0,0,0.8)",
                      textDecoration: "none",
                    }}
                  >
                    ← Back to Home
                  </Link>
                </Typography>
              </Box>
            </form>
          </Box>
        </Card>
      </Box>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{
            width: "100%",
            color: "black",
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
