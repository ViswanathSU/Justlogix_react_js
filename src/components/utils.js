// THEME COLORS
export const getThemeColors = (theme) => ({
  bgColor:
    theme === "dark"
      ? "linear-gradient(to bottom right, #130223ff, #3d0066)"
      : "linear-gradient(to right, #a96828ff, #633609ff)",

  textColor: theme === "dark" ? "white" : "black",

  paperColor: theme === "dark" ? "#2b2727" : "#ffffff",
  
});

// INPUT FIELD STYLE
export const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "1px",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box",
};

// BUTTON STYLE
export const getButtonStyle = (theme) => ({
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background:
    theme === "light"
      ? "linear-gradient(to right, #7e470bff, #4d2f03ff)"
      : "linear-gradient(to bottom right, #130223ff, #3d0066)",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
});

// ERROR TEXT
export const errorStyle = {
  color: "#ff4d4d",
  fontSize: "12px",
  marginTop: "1px",
  fontWeight: "500",
  marginBottom: "5px",
  lineHeight: "1.2",
};

// FORM FIELD WRAPPER
export const fieldWrapper = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "18px",
};
