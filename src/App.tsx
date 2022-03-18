import { Button, Grid } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Typography } from "./modules/typography";

function App() {
  const [currentNumber, setNumber] = useState<number>(0);

  const handleSetNumber = useCallback(() => setNumber((prev) => prev + 1), []);

  return (
    <Grid
      container
      height={"100vh"}
      alignItems="center"
      direction={"row"}
      justifyContent={"center"}
    >
      <Grid
        item
        xs={6}
        container
        alignItems="center"
        direction={"row"}
        justifyContent={"center"}
      >
        {currentNumber > 0 ? (
          <Grid item xs={12}>
            <Typography>Current count: {currentNumber} ⚡</Typography>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Typography>Welcome, you've made it this far ⚡</Typography>
          </Grid>
        )}

        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSetNumber}
            color="success"
          >
            Click here to start counting
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
