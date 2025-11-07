import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.5)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Appbar />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;