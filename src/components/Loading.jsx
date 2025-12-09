import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#8b77a3",
      }}
    >
      <CircularProgress sx={{ color: "#330244ff" }} />
    </Box>
  );
};

export default Loading;
