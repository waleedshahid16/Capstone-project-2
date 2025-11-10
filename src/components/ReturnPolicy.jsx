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
        py: { xs: 3, sm: 4, md: 6 },
        backgroundColor: "rgba(0,0,0,0.02)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 6 } }}>
          <AssignmentReturn
            sx={{
              fontSize: { xs: 48, sm: 56, md: 64 },
              color: "rgba(0,0,0,0.8)",
              mb: { xs: 1.5, sm: 2 },
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
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
              px: { xs: 2, sm: 0 },
              fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            }}
          >
            We want you to be completely satisfied with your purchase. Learn
            about our return and refund process.
          </Typography>
        </Box>

        {/* Return Policy Information */}
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 5 },
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: { xs: 2, md: 3 },
            boxShadow: 2,
            mb: { xs: 3, sm: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              color: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              flexWrap: "wrap",
              fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" },
            }}
          >
            <AccessTime sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
            Return Timeframe
          </Typography>
          <Box sx={{ pl: { xs: 0, sm: 2, md: 6 }, mb: { xs: 3, sm: 4 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                mb: { xs: 1.5, sm: 2 },
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
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
              mb: { xs: 2, sm: 3 },
              color: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              flexWrap: "wrap",
              fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" },
            }}
          >
            <CheckCircle sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
            Eligible for Return
          </Typography>
          <Box sx={{ pl: { xs: 0, sm: 2, md: 6 }, mb: { xs: 3, sm: 4 } }}>
            <Box
              component="ul"
              sx={{ pl: { xs: 2, sm: 3 }, color: "rgba(0,0,0,0.7)" }}
            >
              <Typography
                component="li"
                sx={{
                  mb: 1,
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Defective or damaged items received
              </Typography>
              <Typography
                component="li"
                sx={{
                  mb: 1,
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Wrong item received
              </Typography>
              <Typography
                component="li"
                sx={{
                  mb: 1,
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Items not matching the description
              </Typography>
              <Typography
                component="li"
                sx={{
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Unopened items in original packaging
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              color: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              flexWrap: "wrap",
              fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" },
            }}
          >
            <Cancel sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
            Not Eligible for Return
          </Typography>
          <Box sx={{ pl: { xs: 0, sm: 2, md: 6 }, mb: { xs: 3, sm: 4 } }}>
            <Box
              component="ul"
              sx={{ pl: { xs: 2, sm: 3 }, color: "rgba(0,0,0,0.7)" }}
            >
              <Typography
                component="li"
                sx={{
                  mb: 1,
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Items used or damaged by the customer
              </Typography>
              <Typography
                component="li"
                sx={{
                  mb: 1,
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Items without original packaging or accessories
              </Typography>
              <Typography
                component="li"
                sx={{
                  mb: 1,
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Software, digital products, or downloadable content
              </Typography>
              <Typography
                component="li"
                sx={{
                  mb: 1,
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Personalized or custom-made items
              </Typography>
              <Typography
                component="li"
                sx={{
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Items returned after 14 days
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              color: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              flexWrap: "wrap",
              fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" },
            }}
          >
            <Info sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
            Return Process
          </Typography>
          <Box sx={{ pl: { xs: 0, sm: 2, md: 6 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                mb: { xs: 1.5, sm: 2 },
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
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
                mb: { xs: 1.5, sm: 2 },
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
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
                mb: { xs: 1.5, sm: 2 },
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
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
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              <strong>Step 4:</strong> Ship the item back to us using the
              provided return address. We recommend using a trackable shipping
              method.
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: { xs: 2, md: 3 },
            boxShadow: 2,
            mb: { xs: 3, sm: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              color: "rgba(0,0,0,0.9)",
              fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" },
            }}
          >
            Refund Process
          </Typography>
          <Box sx={{ pl: { xs: 0, sm: 2, md: 4 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8,
                mb: { xs: 1.5, sm: 2 },
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
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
                mb: { xs: 1.5, sm: 2 },
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
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
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              For exchanges, we will ship the replacement item once the original
              item is received and verified.
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: { xs: 2, md: 3 },
            boxShadow: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: { xs: 1.5, sm: 2 },
              color: "rgba(0,0,0,0.9)",
              fontSize: { xs: "1.15rem", sm: "1.35rem", md: "1.5rem" },
            }}
          >
            Important Notes
          </Typography>
          <Box
            component="ul"
            sx={{ pl: { xs: 2, sm: 3 }, color: "rgba(0,0,0,0.7)" }}
          >
            <Typography
              component="li"
              sx={{
                mb: { xs: 0.75, sm: 1 },
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              Return shipping costs are the responsibility of the customer,
              unless the return is due to our error.
            </Typography>
            <Typography
              component="li"
              sx={{
                mb: { xs: 0.75, sm: 1 },
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              Items must be returned in their original condition with all tags,
              labels, and packaging intact.
            </Typography>
            <Typography
              component="li"
              sx={{
                mb: { xs: 0.75, sm: 1 },
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              We reserve the right to refuse returns that do not meet our return
              policy criteria.
            </Typography>
            <Typography
              component="li"
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
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
