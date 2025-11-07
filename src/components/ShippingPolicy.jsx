import React from "react";
import { Box, Container, Typography, Card } from "@mui/material";
import { LocalShipping, AccessTime, LocationOn, CheckCircle } from "@mui/icons-material";

const ShippingPolicy = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        py: { xs: 4, md: 6 },
        backgroundColor: "rgba(0,0,0,0.02)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <LocalShipping
            sx={{ fontSize: 64, color: "rgba(0,0,0,0.8)", mb: 2 }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "rgba(0,0,0,0.9)",
            }}
          >
            Shipping Policy
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
            We are committed to delivering your orders safely and on time.
            Learn more about our shipping process, delivery times, and
            policies.
          </Typography>
        </Box>

        <Card
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 3,
            boxShadow: 2,
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <AccessTime sx={{ fontSize: 32 }} />
            Delivery Times
          </Typography>
          <Box sx={{ pl: { xs: 0, md: 6 }, mb: 4 }}>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              <strong>Standard Shipping:</strong> 5-7 business days
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              <strong>Express Shipping:</strong> 2-3 business days
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                fontSize: "1.1rem",
              }}
            >
              <strong>Same Day Delivery:</strong> Available in select areas
              (orders placed before 12 PM)
            </Typography>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LocationOn sx={{ fontSize: 32 }} />
            Shipping Locations
          </Typography>
          <Box sx={{ pl: { xs: 0, md: 6 }, mb: 4 }}>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              We currently ship to all major cities in Pakistan. Free shipping
              is available on orders above RS 5,000. For orders below this
              amount, a flat shipping fee of RS 500 applies.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                fontSize: "1.1rem",
              }}
            >
              International shipping is available to select countries. Please
              contact our customer service for more information.
            </Typography>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CheckCircle sx={{ fontSize: 32 }} />
            Order Processing
          </Typography>
          <Box sx={{ pl: { xs: 0, md: 6 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              <strong>Order Confirmation:</strong> You will receive an email
              confirmation within 24 hours of placing your order.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              <strong>Processing Time:</strong> Orders are typically processed
              within 1-2 business days. During peak seasons, processing may
              take 3-5 business days.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              <strong>Tracking:</strong> Once your order ships, you will receive
              a tracking number via email. You can track your order status
              through our website or the courier's website.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                fontSize: "1.1rem",
              }}
            >
              <strong>Delivery:</strong> Our delivery partners will contact you
              before delivery. Please ensure someone is available to receive the
              package, or provide delivery instructions during checkout.
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{
            p: { xs: 3, md: 4 },
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 3,
            boxShadow: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "rgba(0,0,0,0.9)",
            }}
          >
            Important Notes
          </Typography>
          <Box component="ul" sx={{ pl: 3, color: "rgba(0,0,0,0.7)" }}>
            <Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
              Delivery times are estimates and may vary due to factors beyond
              our control (weather, holidays, etc.)
            </Typography>
            <Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
              Please verify your shipping address before completing your order.
              We are not responsible for delays due to incorrect addresses.
            </Typography>
            <Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
              For large or heavy items, additional delivery charges may apply.
            </Typography>
            <Typography component="li" sx={{ lineHeight: 1.8 }}>
              If you have any questions about shipping, please contact our
              customer service team.
            </Typography>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default ShippingPolicy;

