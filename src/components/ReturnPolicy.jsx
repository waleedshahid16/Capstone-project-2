import React from "react";
import { Box, Container, Typography, Card } from "@mui/material";
import {
  AssignmentReturn,
  AccessTime,
  CheckCircle,
  Cancel,
  Info,
} from "@mui/icons-material";

const ReturnPolicy = () => {
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
          <AssignmentReturn
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
            Return & Refund Policy
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
            We want you to be completely satisfied with your purchase. Learn
            about our return and refund process.
          </Typography>
        </Box>

        {/* Return Policy Information */}
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
            Return Timeframe
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
              You have <strong>14 days</strong> from the date of delivery to
              initiate a return request. Items must be in their original
              condition, unused, and with all original packaging and accessories
              included.
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
            Eligible for Return
          </Typography>
          <Box sx={{ pl: { xs: 0, md: 6 }, mb: 4 }}>
            <Box component="ul" sx={{ pl: 3, color: "rgba(0,0,0,0.7)" }}>
              <Typography component="li" sx={{ mb: 1, lineHeight: 1.8, fontSize: "1.1rem" }}>
                Defective or damaged items received
              </Typography>
              <Typography component="li" sx={{ mb: 1, lineHeight: 1.8, fontSize: "1.1rem" }}>
                Wrong item received
              </Typography>
              <Typography component="li" sx={{ mb: 1, lineHeight: 1.8, fontSize: "1.1rem" }}>
                Items not matching the description
              </Typography>
              <Typography component="li" sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
                Unopened items in original packaging
              </Typography>
            </Box>
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
            <Cancel sx={{ fontSize: 32 }} />
            Not Eligible for Return
          </Typography>
          <Box sx={{ pl: { xs: 0, md: 6 }, mb: 4 }}>
            <Box component="ul" sx={{ pl: 3, color: "rgba(0,0,0,0.7)" }}>
              <Typography component="li" sx={{ mb: 1, lineHeight: 1.8, fontSize: "1.1rem" }}>
                Items used or damaged by the customer
              </Typography>
              <Typography component="li" sx={{ mb: 1, lineHeight: 1.8, fontSize: "1.1rem" }}>
                Items without original packaging or accessories
              </Typography>
              <Typography component="li" sx={{ mb: 1, lineHeight: 1.8, fontSize: "1.1rem" }}>
                Software, digital products, or downloadable content
              </Typography>
              <Typography component="li" sx={{ mb: 1, lineHeight: 1.8, fontSize: "1.1rem" }}>
                Personalized or custom-made items
              </Typography>
              <Typography component="li" sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
                Items returned after 14 days
              </Typography>
            </Box>
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
            <Info sx={{ fontSize: 32 }} />
            Return Process
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
              <strong>Step 1:</strong> Contact our customer service team within
              14 days of delivery to initiate a return request.
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
              <strong>Step 2:</strong> Our team will review your request and
              provide a Return Authorization (RA) number if approved.
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
              <strong>Step 3:</strong> Package the item securely in its original
              packaging with all accessories and include the RA number.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                fontSize: "1.1rem",
              }}
            >
              <strong>Step 4:</strong> Ship the item back to us using the provided
              return address. We recommend using a trackable shipping method.
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            p: { xs: 3, md: 4 },
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
            }}
          >
            Refund Process
          </Typography>
          <Box sx={{ pl: { xs: 0, md: 4 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                mb: 2,
                fontSize: "1.1rem",
              }}
            >
              Once we receive and inspect the returned item, we will process
              your refund within <strong>5-7 business days</strong>.
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
              Refunds will be issued to the original payment method used for the
              purchase. Shipping charges are non-refundable unless the return is
              due to our error.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                fontSize: "1.1rem",
              }}
            >
              For exchanges, we will ship the replacement item once the original
              item is received and verified.
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
              Return shipping costs are the responsibility of the customer,
              unless the return is due to our error.
            </Typography>
            <Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
              Items must be returned in their original condition with all tags,
              labels, and packaging intact.
            </Typography>
            <Typography component="li" sx={{ mb: 1, lineHeight: 1.8 }}>
              We reserve the right to refuse returns that do not meet our return
              policy criteria.
            </Typography>
            <Typography component="li" sx={{ lineHeight: 1.8 }}>
              For any questions or concerns about returns, please contact our
              customer service team.
            </Typography>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default ReturnPolicy;

