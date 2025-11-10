import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import { useState } from "react";
import { Badge, Divider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PhoneIcon from "@mui/icons-material/Phone";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link as RouterLink } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const pages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Offers", path: "/offers" },
];

function ResponsiveAppBar() {
  const { cartList } = useSelector((state) => state.cart);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 56, sm: 60, md: 64, lg: 70 },
              px: { xs: 0.5, sm: 1, md: 1.5 },
            }}
          >
            {/* Desktop Logo */}
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                mr: { md: 2, lg: 3 },
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: { md: ".2rem", lg: ".3rem" },
                color: "white",
                fontSize: { md: "1.15rem", lg: "1.25rem" },
                transition: "opacity 0.3s ease",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              Digitronix
            </Link>

            {/* Mobile Menu Icon */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  p: { xs: 0.75, sm: 1 },
                  mr: { xs: 0.5, sm: 1 },
                }}
              >
                <MenuIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiPaper-root": {
                    minWidth: { xs: 180, sm: 200 },
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    to={page.path}
                    sx={{
                      py: { xs: 1, sm: 1.25 },
                      px: { xs: 2, sm: 2.5 },
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: { xs: "0.9rem", sm: "0.95rem" },
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to="/contact"
                  sx={{
                    py: { xs: 1, sm: 1.25 },
                    px: { xs: 2, sm: 2.5 },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: { xs: "0.9rem", sm: "0.95rem" },
                    }}
                  >
                    Contact Us
                  </Typography>
                </MenuItem>

                <Divider sx={{ my: 1 }} />

                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to="/login"
                  sx={{
                    py: { xs: 1, sm: 1.25 },
                    px: { xs: 2, sm: 2.5 },
                  }}
                >
                  <LoginIcon sx={{ mr: 1, fontSize: { xs: 18, sm: 20 } }} />
                  <Typography
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "0.95rem" },
                    }}
                  >
                    Login
                  </Typography>
                </MenuItem>

                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to="/signup"
                  sx={{
                    py: { xs: 1, sm: 1.25 },
                    px: { xs: 2, sm: 2.5 },
                  }}
                >
                  <PersonAddIcon sx={{ mr: 1, fontSize: { xs: 18, sm: 20 } }} />
                  <Typography
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "0.95rem" },
                    }}
                  >
                    Signup
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: { xs: ".15rem", sm: ".2rem" },
                color: "white",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                transition: "opacity 0.3s ease",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              Digitronix
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: { md: 1, lg: 2 },
                ml: { md: 2, lg: 3 },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                    fontSize: { md: "0.875rem", lg: "1rem" },
                    px: { md: 1.5, lg: 2 },
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: { md: 1, lg: 1.5 },
              }}
            >
              <Button
                component={RouterLink}
                to="/login"
                sx={{
                  color: "white",
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  fontSize: { md: "0.8rem", lg: "0.875rem" },
                  px: { md: 1.75, lg: 2 },
                  py: { md: 0.5, lg: 0.75 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                    borderColor: "white",
                  },
                }}
                variant="outlined"
              >
                Login
              </Button>

              <Button
                component={RouterLink}
                to="/signup"
                sx={{
                  color: "white",
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  fontSize: { md: "0.8rem", lg: "0.875rem" },
                  px: { md: 1.75, lg: 2 },
                  py: { md: 0.5, lg: 0.75 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                    borderColor: "white",
                  },
                }}
                variant="outlined"
              >
                Signup
              </Button>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "block" },
                ml: { md: 1, lg: 1.5 },
              }}
            >
              <IconButton
                component={RouterLink}
                to="/contact"
                sx={{
                  color: "white",
                  p: { md: 1, lg: 1.25 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                aria-label="Contact Us"
              >
                <PhoneIcon sx={{ fontSize: { md: 22, lg: 24 } }} />
              </IconButton>
            </Box>

            <Box sx={{ ml: { xs: 0.5, sm: 1, md: 1.5 } }}>
              <IconButton
                onClick={toggleCart}
                sx={{
                  p: { xs: 0.75, sm: 1, md: 1.25 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                aria-label="Shopping Cart"
              >
                <Badge
                  badgeContent={cartList?.length}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: { xs: "0.65rem", sm: "0.7rem", md: "0.75rem" },
                      minWidth: { xs: 16, sm: 18, md: 20 },
                      height: { xs: 16, sm: 18, md: 20 },
                    },
                  }}
                >
                  <AddShoppingCartIcon
                    sx={{
                      color: "white",
                      fontSize: { xs: 20, sm: 22, md: 24, lg: 26 },
                    }}
                  />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Cart open={cartOpen} onClose={toggleCart} />
    </>
  );
}

export default ResponsiveAppBar;
