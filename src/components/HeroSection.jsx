import React, { useState, useCallback, useEffect } from "react";
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
import { useDebounce } from "../hooks/useDebounce";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [filterCategory, setLocalFilterCategory] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchTerm = useDebounce(searchInput, 300);

  // Dispatch search only when debounced value changes
  useEffect(() => {
    dispatch(searchItem(debouncedSearchTerm));
  }, [debouncedSearchTerm, dispatch]);

  const handleSearchClick = useCallback(() => {
    setTimeout(() => {
      const productsSection = document.getElementById("products-section");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);
  }, []);

  const handleFilterChange = useCallback((e) => {
    setLocalFilterCategory(e.target.value);
    dispatch(setFilterCategory(e.target.value));
  }, [dispatch]);

  const handleSearchChange = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: { 
          xs: "65vh",
          sm: "75vh",      
          md: "85vh",   
          lg: "100vh"
        },
        width: "100%",
        overflow: "hidden",
        minHeight: { xs: "500px", sm: "550px", md: "600px" }
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={BgImg}
        alt="Electronics background"
        sx={{
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />

      {/* Content Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          mt: { xs: 3, sm: 5, md: 6, lg: 8 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, sm: 3, md: 4, lg: 5 },
          textAlign: "center",
        }}
      >
        {/* Welcome Title */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: "bold",
            background:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(128,128,128,1) 25%, rgba(0,0,0,1) 50%, rgba(128,128,128,1) 75%, rgba(0,0,0,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: {
              xs: "1.5rem",    
              sm: "1.85rem",    
              md: "2.25rem",
              lg: "2.75rem",   
              xl: "3.25rem",   
            },
            mb: { xs: 3, sm: 5, md: 6, lg: 8 },
            letterSpacing: { xs: "0.02em", sm: "0.03em", md: "0.04em" },
            lineHeight: 1.2,
            px: { xs: 1, sm: 2 },
          }}
        >
          Welcome to Digitronix
        </Typography>

        {/* Search Container */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { 
              xs: "95%",        
              sm: "540px",      
              md: "720px",   
              lg: "860px",   
              xl: "960px"    
            },
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              backgroundColor: "white",
              borderRadius: { xs: 2, sm: 2.5, md: 3 },
              boxShadow: { 
                xs: "0 4px 12px rgba(0,0,0,0.15)", 
                sm: "0 6px 16px rgba(0,0,0,0.2)",
                md: "0 8px 20px rgba(0,0,0,0.25)"
              },
              overflow: "hidden",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: { 
                  xs: "0 6px 16px rgba(0,0,0,0.2)",
                  sm: "0 8px 20px rgba(0,0,0,0.25)",
                  md: "0 10px 24px rgba(0,0,0,0.3)"
                },
              },
            }}
          >
            {/* Filter Dropdown */}
            <Select
              value={filterCategory}
              onChange={handleFilterChange}
              displayEmpty
              startAdornment={
                <FilterListIcon sx={{ 
                  mr: { xs: 0.75, sm: 1 }, 
                  color: "white",
                  fontSize: { xs: 18, sm: 20, md: 22 }
                }} />
              }
              sx={{
                minWidth: { 
                  xs: "100%",       
                  sm: "150px",      
                  md: "170px",      
                  lg: "190px"    
                },
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "white",
                fontSize: { xs: "0.8rem", sm: "0.875rem", md: "0.95rem", lg: "1rem" },
                fontWeight: 500,
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                "& .MuiSvgIcon-root": { color: "white" },
                "&:hover": { 
                  backgroundColor: "rgba(0,0,0,0.8)" 
                },
                "&.Mui-focused": {
                  backgroundColor: "rgba(0,0,0,0.85)"
                },
                borderRadius: { 
                  xs: "8px 8px 0 0",  
                  sm: "8px 0 0 8px"   
                },
                py: { xs: 0.5, sm: 0.75, md: 1 },
              }}
            >
              <MenuItem value="all" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem", md: "1rem" } }}>
                All Categories
              </MenuItem>
              <MenuItem value="audio" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem", md: "1rem" } }}>
                Audio Devices
              </MenuItem>
              <MenuItem value="accessories" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem", md: "1rem" } }}>
                Accessories
              </MenuItem>
              <MenuItem value="charging" sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem", md: "1rem" } }}>
                Charging
              </MenuItem>
            </Select>

            {/* Search Input */}
            <TextField
              fullWidth
              placeholder="Search your products from here"
              variant="outlined"
              onChange={handleSearchChange}
              sx={{
                "& fieldset": { border: "none" },
                backgroundColor: "rgba(0,0,0,0.02)",
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
                "& input": {
                  fontSize: { 
                    xs: "0.8rem",      
                    sm: "0.875rem",    
                    md: "0.95rem",     
                    lg: "1rem"         
                  },
                  py: { xs: 1.4, sm: 1.6, md: 1.75 },
                  px: { xs: 1.5, sm: 2, md: 2.5 },
                  "&::placeholder": {
                    opacity: 0.7,
                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" }
                  },
                },
              }}
            />

            {/* Search Button */}
            <Button
              type="submit"
              startIcon={
                <SearchIcon sx={{ 
                  fontSize: { xs: 16, sm: 18, md: 20, lg: 22 },
                  display: { xs: "none", sm: "block" }  
                }} />
              }
              variant="contained"
              onClick={handleSearchClick}
              sx={{
                bgcolor: "rgba(0,0,0,0.75)",
                px: { xs: 2, sm: 2.5, md: 3, lg: 3.5 },
                py: { xs: 1.4, sm: 1.6, md: 1.75 },
                borderRadius: { 
                  xs: "0 0 8px 8px",  
                  sm: "0 8px 8px 0"   
                },
                minWidth: { xs: "100%", sm: "100px", md: "120px", lg: "140px" },
                fontSize: { 
                  xs: "0.8rem", 
                  sm: "0.875rem", 
                  md: "0.95rem", 
                  lg: "1rem" 
                },
                fontWeight: 600,
                textTransform: "none",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                "&:hover": { 
                  bgcolor: "rgba(0,0,0,0.9)",
                  transform: { sm: "translateY(-1px)" },
                  boxShadow: { sm: "0 4px 8px rgba(0,0,0,0.2)" }
                },
                "&:active": {
                  transform: "translateY(0)",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>

        {/* Optional: Search Hint Text */}
        <Typography
          variant="caption"
          sx={{
            mt: { xs: 2, sm: 3, md: 4 },
            color: "white",
            fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
            display: { xs: "none", sm: "block" },
            textAlign: "center",
            px: 2,
          }}
        >
          Press Enter or click Search to find your favorite products
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(HeroSection);