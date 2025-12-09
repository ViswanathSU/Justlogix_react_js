import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Search({ searchValue, onSearchChange }) {
  return (
    <TextField
      placeholder="Search by name"
      value={searchValue}
      onChange={(e) => onSearchChange(e.target.value)}
      sx={{
        width: 430,
        marginBottom: 2,
        bgcolor: "white",
        borderRadius: "10px",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#666" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default Search;