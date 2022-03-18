import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "./core";

export const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
