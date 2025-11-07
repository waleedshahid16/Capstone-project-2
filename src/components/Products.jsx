import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchItem, setFilterCategory } from "../store/slices/searchSlice";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import InputAdornment from "@mui/material/InputAdornment";
// import { products } from "../data/dummyData";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Card, Grid, Snackbar, Typography } from "@mui/material";
import { addToCart } from "../store/slices/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";

export default function ImgMediaCard() {
  const { products: productsDummyData } = useSelector((state) => state.cart);
  const { searchTerm, filterCategory } = useSelector((state) => state.search);
  const [localFilterCategory, setLocalFilterCategory] = useState("all");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [expandedProducts, setExpandedProducts] = useState(false);
  const filteredProducts = productsDummyData.filter((prod) => {
    const matchSearch = searchTerm
      ? prod.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const matchFilter =
      filterCategory === "all" || prod.category === filterCategory;

    return matchSearch && matchFilter;
  });
  const maxLength = 80;

  const toggleReadMore = (productId) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <Box id="products-section" className="grow mx-32 ">
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          background: "black",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          justifyContent: "center",
          display: "flex",
          margin: "20px",
          fontSize: {
            xs: "1.5rem",
            sm: "1.75rem",
            md: "2rem",
            lg: "2.5rem",
            xl: "3rem",
          },
        }}
      >
        All Products
      </Typography>
      <Box className="flex gap-4 mb-6 items-center">
        <TextField
          fullWidth
          placeholder="Search products..."
          variant="outlined"
          onChange={(e) => dispatch(searchItem(e.target.value))}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0,0,0,0.2)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(0,0,0,0.4)",
              },
            },
          }}
        />

        <Select
          value={localFilterCategory}
          onChange={(e) => {
            setLocalFilterCategory(e.target.value);
            dispatch(setFilterCategory(e.target.value));
          }}
          displayEmpty
          startAdornment={<FilterListIcon sx={{ mr: 1 }} />}
          sx={{
            minWidth: "200px",
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "& .MuiSvgIcon-root": { color: "white" },
            "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            borderRadius: "8px 0 0 8px",
          }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="audio">Audio Devices</MenuItem>
          <MenuItem value="accessories">Accessories</MenuItem>
          <MenuItem value="charging">Charging</MenuItem>
        </Select>
      </Box>
      <Grid container spacing={2}>
        {filteredProducts?.map((product, index) => {
          const isExpanded = expandedProducts[product.id] || false;
          const description = product.description || "";
          const displayText = isExpanded
            ? description
            : description.slice(0, maxLength);
          const shouldShowButton = description.length > maxLength;

          return (
            <Grid
              key={product.id}
              size={3}
              id={
                index === 0 && searchTerm ? `product-${product.id}` : undefined
              }
              sx={{marginBottom: "2rem"}}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: 2.5,
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: "15px",
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  onClick={() => {navigate(`/product/${product.id}`)}}
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    mb: 2,
                  }}
                  className="cursor-pointer"
                />
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {product.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    flexGrow: 1,
                    mb: 1,
                  }}
                >
                  {displayText}
                  {shouldShowButton && !isExpanded && "..."}
                </Typography>

                {shouldShowButton && (
                  <Button
                    onClick={() => toggleReadMore(product.id)}
                    sx={{
                      textTransform: "none",
                      color: "rgba(0,0,0,0.7)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      p: 0,
                      minWidth: "auto",
                      mb: 2,
                      alignSelf: "flex-start",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "rgba(0,0,0,1)",
                      },
                    }}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </Button>
                )}

                <Box className="flex justify-between" sx={{ mt: "auto" }}>
                  <Typography variant="h6">RS {product.price}</Typography>
                  <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={() => setOpenSnackbar(false)}
                    message="Item added to cart!"
                  />
                  <Button
                    onClick={() => {
                      dispatch(
                        addToCart(
                          productsDummyData.find((p) => p.id === product.id)
                        )
                      );
                      setOpenSnackbar(true);
                    }}
                    sx={{
                      borderRadius: "50px",
                      border: "1px solid black",
                      color: "black",
                      textTransform: "none",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.3)",
                        borderColor: "rgba(0,0,0,0.3)",
                      },
                    }}
                  >
                    <AddShoppingCartIcon
                      sx={{
                        mr: 1,
                        color: "black",
                      }}
                    />
                    Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
