import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./HeroSection";
import HomePage from "./HomePage";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <HomePage />
    </Box>
  );
};

export default Home;