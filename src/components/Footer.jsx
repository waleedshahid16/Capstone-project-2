import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        mt: "auto",
        pt: { xs: 3, sm: 4 },
        pb: 2,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, sm: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: "monospace",
                letterSpacing: { xs: ".2rem", md: ".3rem" },
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              Digitronix
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                color: "rgba(255,255,255,0.7)",
                fontSize: { xs: "0.875rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              Your trusted destination for the latest electronics and technology
              products. Quality products at competitive prices.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": { color: "#1877F2" },
                  p: { xs: 0.75, sm: 1 },
                }}
                aria-label="Facebook"
              >
                <Facebook sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": { color: "#1DA1F2" },
                  p: { xs: 0.75, sm: 1 },
                }}
                aria-label="Twitter"
              >
                <Twitter sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": { color: "#E4405F" },
                  p: { xs: 0.75, sm: 1 },
                }}
                aria-label="Instagram"
              >
                <Instagram sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  "&:hover": { color: "#0077B5" },
                  p: { xs: 0.75, sm: 1 },
                }}
                aria-label="LinkedIn"
              >
                <LinkedIn sx={{ fontSize: { xs: 20, sm: 24 } }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 0.75, sm: 1 },
              }}
            >
              <Link
                component={RouterLink}
                to="/"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { color: "white" },
                }}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/products"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { color: "white" },
                }}
              >
                Products
              </Link>
              <Link
                component={RouterLink}
                to="/offers"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { color: "white" },
                }}
              >
                Offers
              </Link>
              <Link
                component={RouterLink}
                to="/login"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { color: "white" },
                }}
              >
                Login
              </Link>
            </Box>
          </Grid>

          {/* Customer Service */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
              }}
            >
              Customer Service
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 0.75, sm: 1 },
              }}
            >
              <Link
                component={RouterLink}
                to="/about"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { color: "white" },
                }}
              >
                About Us
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { color: "white" },
                }}
              >
                Contact Us
              </Link>
              <Link
                component={RouterLink}
                to="/shipping-policy"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { color: "white" },
                }}
              >
                Shipping Policy
              </Link>
              <Link
                component={RouterLink}
                to="/return-policy"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { color: "white" },
                }}
              >
                Return Policy
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  "&:hover": { color: "white" },
                }}
              >
                FAQ
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
              }}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, sm: 2 },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email
                  sx={{
                    fontSize: { xs: 18, sm: 20 },
                    color: "rgba(255,255,255,0.7)",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  support@digitronix.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone
                  sx={{
                    fontSize: { xs: 18, sm: 20 },
                    color: "rgba(255,255,255,0.7)",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  +92 332 5178888
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <LocationOn
                  sx={{
                    fontSize: { xs: 18, sm: 20 },
                    color: "rgba(255,255,255,0.7)",
                    mt: 0.5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  Sector I-8 Markaz, Islamabad, Pakistan
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            mt: { xs: 3, sm: 4 },
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            © {new Date().getFullYear()} Digitronix. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
