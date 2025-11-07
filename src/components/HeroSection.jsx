import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import BgImg from "../assets/BgImg.webp";
import { useDispatch } from "react-redux";
import { searchItem, setFilterCategory } from "../store/slices/searchSlice";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [filterCategory, setLocalFilterCategory] = useState("all");

  const handleSearchClick = () => {
    setTimeout(() => {
      const productsSection = document.getElementById("products-section");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  };

  return (
    <Box className="relative h-screen w-full overflow-hidden">
      <Box
        component="img"
        src={BgImg}
        alt="Grocery background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <Box className="absolute inset-0 mt-8 flex w-full flex-col items-center justify-center p-5 text-center">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            background:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(128,128,128,1) 25%, rgba(0,0,0,1) 50%, rgba(128,128,128,1) 75%, rgba(0,0,0,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: {
              xs: "1.5rem",
              sm: "1.75rem",
              md: "2rem",
              lg: "2.5rem",
              xl: "3rem",
            },
          }}
        >
          Welcome to Digitronix
        </Typography>
        <Box className="w-full max-w-3xl mt-8">
          <Box className="flex bg-white rounded-lg shadow-md overflow-hidden">
            {/* Filter Dropdown */}
            <Select
              value={filterCategory}
              onChange={(e) => {
                setLocalFilterCategory(e.target.value);
                dispatch(setFilterCategory(e.target.value));
              }}
              displayEmpty
              startAdornment={<FilterListIcon sx={{ mr: 1, color: "white" }} />}
              sx={{
                minWidth: "180px",
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSvgIcon-root": { color: "white" },
                "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
                borderRadius: "8px 0 0 8px",
              }}
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="audio">Audio Devices</MenuItem>
              <MenuItem value="accessories">Accessories</MenuItem>
              <MenuItem value="charging">Charging</MenuItem>
            </Select>

            <TextField
              fullWidth
              placeholder="Search your products from here"
              variant="outlined"
              onChange={(e) => dispatch(searchItem(e.target.value))}
              sx={{
                "& fieldset": { border: "none" },
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
            />

            <Button
              type="submit"
              startIcon={<SearchIcon />}
              variant="contained"
              onClick={() => handleSearchClick()}
              sx={{
                bgcolor: "rgba(0,0,0,0.7)",
                px: 3,
                borderRadius: "0 8px 8px 0",
                minWidth: "120px",
                textTransform: "none",
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
