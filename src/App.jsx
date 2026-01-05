import { useState } from "react";
import LoginForm from "./components/LoginForm.jsx";
import SignIn from "./components/SignInForm.jsx";
import "./App.css";

import { Box, Paper, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { getThemeColors } from "./components/utils.js";

function App() {
  const [view, setView] = useState("login");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const theme = darkMode ? "dark" : "light";
  const colors = getThemeColors(theme);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: colors.bgColor,
        height: "100vh",
        position: "relative",
        transition: "all 0.3s ease-in-out",
      }}
    >
       {/* THEME TOGGLE BUTTON */}
<div
  onClick={toggleTheme}  // use the function that toggles darkMode
  style={{
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
    zIndex: 999,
  }}
>
  {darkMode ? (
    <LightModeIcon style={{ fontSize: "32px", color: colors.textColor }} />
  ) : (
    <DarkModeIcon style={{ fontSize: "32px", color: colors.textColor }} />
  )}
</div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 6,
        }}
      >
        <Paper
          sx={{
            minHeight: "60vh",
            minWidth: "70vh",
            padding: "40px",
            textAlign: "center",
            borderRadius: "12px",
            background: colors.paperColor,
            color: colors.textColor,
          }}
        >
          {/* NAV BAR */}
          <nav
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              marginBottom: "20px",
              marginTop: "10px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <span
              onClick={() => setView("login")}
              style={{
                cursor: "pointer",
                height: "50px",
                width: "90px",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                color: view === "login" ? "#01012aff" : "black",
                borderBottom:
                  view === "login" ? "2px solid #01012aff" : "none",
              }}
            >
              Login
            </span>

            <span
              onClick={() => setView("sign")}
              style={{
                cursor: "pointer",
                height: "50px",
                width: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: view === "sign" ? "#01012aff" : "black",
                borderBottom:
                  view === "sign" ? "2px solid #01012aff" : "none",
              }}
            >
              SignIn
            </span>
          </nav>

          {/* RENDER FORMS */}
          {view === "login" ? (
            <LoginForm theme={theme} />
          ) : (
            <SignIn setView={setView} theme={theme} />
          )}
        </Paper>
      </Box>
    </div>
  );
}

export default App;
