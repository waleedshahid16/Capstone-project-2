import React from "react";
import { Box, Container, Typography, Card, Grid } from "@mui/material";
import { Business, People, Star, LocalShipping } from "@mui/icons-material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        py: { xs: 3, sm: 4, md: 5, lg: 6 },
        px: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
        backgroundColor: "rgba(0,0,0,0.02)",
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 5.5, lg: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: { xs: 1.5, sm: 1.75, md: 1.85, lg: 2 },
              fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
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
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.75, lg: 1.8 },
              fontSize: {
                xs: "0.95rem",
                sm: "1rem",
                md: "1.15rem",
                lg: "1.25rem",
              },
              px: { xs: 1, sm: 2 },
            }}
          >
            Your trusted destination for the latest electronics and technology
            products. We are committed to providing quality products at
            competitive prices with exceptional customer service.
          </Typography>
        </Box>

        {/* Mission & Vision */}
        <Grid
          container
          spacing={{ xs: 2.5, sm: 3, md: 3.5, lg: 4 }}
          sx={{ mb: { xs: 4, sm: 5, md: 5.5, lg: 6 } }}
        >
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
                height: "100%",
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
                boxShadow: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <Business
                sx={{
                  fontSize: { xs: 40, sm: 44, md: 46, lg: 48 },
                  color: "rgba(0,0,0,0.8)",
                  mb: { xs: 1.5, sm: 1.75, md: 1.85, lg: 2 },
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 1.5, sm: 1.75, md: 1.85, lg: 2 },
                  fontSize: {
                    xs: "1.15rem",
                    sm: "1.25rem",
                    md: "1.35rem",
                    lg: "1.5rem",
                  },
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0,0,0,0.7)",
                  lineHeight: { xs: 1.6, sm: 1.7, md: 1.75, lg: 1.8 },
                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.95rem",
                    md: "1rem",
                    lg: "1rem",
                  },
                }}
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
                p: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
                height: "100%",
                backgroundColor: "rgba(255,255,255,0.8)",
                borderRadius: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
                boxShadow: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <Star
                sx={{
                  fontSize: { xs: 40, sm: 44, md: 46, lg: 48 },
                  color: "rgba(0,0,0,0.8)",
                  mb: { xs: 1.5, sm: 1.75, md: 1.85, lg: 2 },
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 1.5, sm: 1.75, md: 1.85, lg: 2 },
                  fontSize: {
                    xs: "1.15rem",
                    sm: "1.25rem",
                    md: "1.35rem",
                    lg: "1.5rem",
                  },
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0,0,0,0.7)",
                  lineHeight: { xs: 1.6, sm: 1.7, md: 1.75, lg: 1.8 },
                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.95rem",
                    md: "1rem",
                    lg: "1rem",
                  },
                }}
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
        <Box sx={{ mb: { xs: 4, sm: 5, md: 5.5, lg: 6 } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 3, sm: 3.5, md: 3.75, lg: 4 },
              textAlign: "center",
              color: "rgba(0,0,0,0.9)",
              fontSize: {
                xs: "1.5rem",
                sm: "1.75rem",
                md: "2rem",
                lg: "2.125rem",
              },
            }}
          >
            Our Core Values
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, sm: 2.5, md: 2.75, lg: 3 }}
            justifyContent="center"
          >
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: { xs: 2.5, sm: 2.75, md: 2.85, lg: 3 },
                  textAlign: "center",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  borderRadius: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
                  boxShadow: 2,
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <People
                  sx={{
                    fontSize: { xs: 36, sm: 38, md: 39, lg: 40 },
                    color: "rgba(0,0,0,0.8)",
                    mb: { xs: 1.5, sm: 1.75, md: 1.85, lg: 2 },
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: { xs: 0.85, sm: 0.9, md: 0.95, lg: 1 },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.15rem",
                      lg: "1.25rem",
                    },
                  }}
                >
                  Customer First
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0,0,0,0.7)",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.875rem",
                    },
                  }}
                >
                  Our customers are at the heart of everything we do
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: { xs: 2.5, sm: 2.75, md: 2.85, lg: 3 },
                  textAlign: "center",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  borderRadius: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
                  boxShadow: 2,
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <Star
                  sx={{
                    fontSize: { xs: 36, sm: 38, md: 39, lg: 40 },
                    color: "rgba(0,0,0,0.8)",
                    mb: { xs: 1.5, sm: 1.75, md: 1.85, lg: 2 },
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: { xs: 0.85, sm: 0.9, md: 0.95, lg: 1 },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.15rem",
                      lg: "1.25rem",
                    },
                  }}
                >
                  Quality
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0,0,0,0.7)",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.875rem",
                    },
                  }}
                >
                  We ensure only the best products reach our customers
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: { xs: 2.5, sm: 2.75, md: 2.85, lg: 3 },
                  textAlign: "center",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  borderRadius: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
                  boxShadow: 2,
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <LocalShipping
                  sx={{
                    fontSize: { xs: 36, sm: 38, md: 39, lg: 40 },
                    color: "rgba(0,0,0,0.8)",
                    mb: { xs: 1.5, sm: 1.75, md: 1.85, lg: 2 },
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: { xs: 0.85, sm: 0.9, md: 0.95, lg: 1 },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.15rem",
                      lg: "1.25rem",
                    },
                  }}
                >
                  Reliability
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0,0,0,0.7)",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.875rem",
                    },
                  }}
                >
                  Trusted delivery and service you can count on
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  p: { xs: 2.5, sm: 2.75, md: 2.85, lg: 3 },
                  textAlign: "center",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  borderRadius: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
                  boxShadow: 2,
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <Business
                  sx={{
                    fontSize: { xs: 36, sm: 38, md: 39, lg: 40 },
                    color: "rgba(0,0,0,0.8)",
                    mb: { xs: 1.5, sm: 1.75, md: 1.85, lg: 2 },
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: { xs: 0.85, sm: 0.9, md: 0.95, lg: 1 },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.15rem",
                      lg: "1.25rem",
                    },
                  }}
                >
                  Innovation
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0,0,0,0.7)",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "0.875rem",
                    },
                  }}
                >
                  Staying ahead with the latest technology trends
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Story Section */}
        <Card
          sx={{
            p: { xs: 2.5, sm: 3, md: 4, lg: 5 },
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
            boxShadow: 2,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: 4,
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
              color: "rgba(0,0,0,0.9)",
              fontSize: {
                xs: "1.5rem",
                sm: "1.75rem",
                md: "2rem",
                lg: "2.125rem",
              },
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.7)",
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.75, lg: 1.8 },
              mb: { xs: 2, sm: 2.5, md: 2.75, lg: 3 },
              fontSize: {
                xs: "0.95rem",
                sm: "1rem",
                md: "1.05rem",
                lg: "1.1rem",
              },
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
              lineHeight: { xs: 1.6, sm: 1.7, md: 1.75, lg: 1.8 },
              fontSize: {
                xs: "0.95rem",
                sm: "1rem",
                md: "1.05rem",
                lg: "1.1rem",
              },
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
