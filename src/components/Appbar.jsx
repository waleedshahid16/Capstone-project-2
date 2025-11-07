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
import { Badge } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PhoneIcon from "@mui/icons-material/Phone";
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
          <Toolbar disableGutters>
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                fontSize: "1.25rem",
              }}
            >
              Digitronix
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    component={RouterLink}
                    to={page.path}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to="/contact"
                >
                  <Typography sx={{ textAlign: "center" }}>Contact Us</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                fontSize: "1.25rem",
              }}
            >
              Digitronix
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box className="grow-0">
              <Button
                component={RouterLink}
                to="/login"
                sx={{
                  color: "white",
                  borderColor: "black",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
                variant="outlined"
              >
                Login
              </Button>
            </Box>

            <Box className="grow-0 ms-2">
              <Button
                component={RouterLink}
                to="/signup"
                sx={{
                  color: "white",
                  borderColor: "black",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
                variant="outlined"
              >
                Signup
              </Button>
            </Box>

            <Box className="grow-0 ms-2">
              <IconButton
                component={RouterLink}
                to="/contact"
                sx={{ color: "white" }}
                aria-label="Contact Us"
              >
                <PhoneIcon />
              </IconButton>
            </Box>

            <Box className="grow-0 ms-2">
              <Button onClick={toggleCart}>
                <Badge badgeContent={cartList?.length} color="error">
                  <AddShoppingCartIcon sx={{ color: "white" }} />
                </Badge>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Cart open={cartOpen} onClose={toggleCart} />
    </>
  );
}

export default ResponsiveAppBar;
