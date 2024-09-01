import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { GlobalStyles } from "@mui/material";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      // mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#155da4",
        contrastText: isDarkMode ? "#f5f5f5" : "#292929",
      },
      background: {
        default: isDarkMode ? "#292929" : "#ffffff",
        paper: isDarkMode ? "#3e3e3e" : "#f5f5f5",
      },

      text: {
        primary: isDarkMode ? "#f5f5f5" : "#292929",
        secondary: "#818181",
      },
      link: {
        color: isDarkMode ? "#f5f5f5" : "#292929",
      },
      hoverBackground: {
        background: isDarkMode ? "#3E3E3E" : "#F2F2F2",
      },
      icon: {
        fill: isDarkMode ? "#f5f5f5" : "#292929",
      },
    },
    typography: {
      fontFamily: "Raleway, Arial",
      h1: {
        fontFamily: "Raleway, Arial",
      },
    },
  });
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyles styles={{ body: { padding: 0, margin: 0 } }} />
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
