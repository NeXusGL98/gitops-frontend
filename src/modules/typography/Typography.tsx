import { Typography as MuiTypography } from "@mui/material";
import React from "react";

export const Typography: React.FC = ({ children }) => {
  return (
    <div>
      <MuiTypography
        textAlign={"center"}
        variant="h1"
        gutterBottom
        component="div"
      >
        {children}
      </MuiTypography>
    </div>
  );
};
