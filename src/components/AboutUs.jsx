import React from "react";
import { Box, Container, Typography, Card, Grid } from "@mui/material";
import { Business, People, Star, LocalShipping } from "@mui/icons-material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        py: { xs: 4, md: 6 },
        backgroundColor: "rgba(0,0,0,0.02)",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "rgba(0,0,0,0.9)",
            }}
          >
            About Digitronix
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(0,0,0,0.7)",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Your trusted destination for the latest electronics and technology
            products. We are committed to providing quality products at
            competitive prices with exceptional customer service.
          </Typography>
        </Box>

        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                height: "100%",
                  backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 3,
                boxShadow: 2,
              }}
            >
              <Business
                sx={{ fontSize: 48, color: "rgba(0,0,0,0.8)", mb: 2 }}
              />
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}
              >
                To provide customers with the latest technology products at
                affordable prices while maintaining the highest standards of
                quality and customer service. We strive to make technology
                accessible to everyone.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                height: "100%",
                  backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 3,
                boxShadow: 2,
              }}
            >
              <Star sx={{ fontSize: 48, color: "rgba(0,0,0,0.8)", mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}
              >
                To become the leading e-commerce platform for electronics in the
                region, known for innovation, reliability, and exceptional
                customer experience. We envision a future where technology
                enhances everyone's life.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Values Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: "center",
              color: "rgba(0,0,0,0.9)",
            }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: 3,
                  boxShadow: 2,
                  height: "100%",
                }}
              >
                <People
                  sx={{ fontSize: 40, color: "rgba(0,0,0,0.8)", mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Customer First
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
                  Our customers are at the heart of everything we do
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: 3,
                  boxShadow: 2,
                  height: "100%",
                }}
              >
                <Star sx={{ fontSize: 40, color: "rgba(0,0,0,0.8)", mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Quality
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
                  We ensure only the best products reach our customers
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: 3,
                  boxShadow: 2,
                  height: "100%",
                }}
              >
                <LocalShipping
                  sx={{ fontSize: 40, color: "rgba(0,0,0,0.8)", mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Reliability
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
                  Trusted delivery and service you can count on
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: 3,
                  boxShadow: 2,
                  height: "100%",
                }}
              >
                <Business
                  sx={{ fontSize: 40, color: "rgba(0,0,0,0.8)", mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Innovation
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.7)" }}>
                  Staying ahead with the latest technology trends
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Story Section */}
        <Card
          sx={{
            p: { xs: 3, md: 5 },
                  backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 3,
            boxShadow: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "rgba(0,0,0,0.9)",
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.7)",
              lineHeight: 1.8,
              mb: 3,
              fontSize: "1.1rem",
            }}
          >
            Digitronix was founded with a simple mission: to make cutting-edge
            technology accessible to everyone. What started as a small venture
            has grown into a trusted e-commerce platform serving thousands of
            satisfied customers.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.7)",
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            We carefully curate our product selection, working directly with
            manufacturers and authorized distributors to ensure authenticity and
            quality. Our team is passionate about technology and dedicated to
            helping you find the perfect products for your needs.
          </Typography>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutUs;
