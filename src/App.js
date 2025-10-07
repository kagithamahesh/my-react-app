import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export default function App() {
  return (
    <>
      <div>
        <Paper
          elevation={4}
          sx={{
            p: 2,
            height: "100%", // Ensures Paper fills the vertical space if content were aligned
            borderRadius: 2,
            bgcolor: "#ffffff",
          }}
        >
          <Typography variant="h5">
            E1 Tracking
            <hr />
          </Typography>
          <Grid container spacing={2} mt={2}>
            <Grid size={{ xs: 6, md: 4 }}>
              <GridRow label="E1R#:">
                <Box sx={{ borderRadius: 1 }}>NEW</Box>
              </GridRow>
              <GridRow label="CCR:">
                <Box sx={{ borderRadius: 1 }}>N/A</Box>
              </GridRow>
              <GridRow label="TEO:">
                <Box sx={{ borderRadius: 1 }}>TEOValue</Box>
              </GridRow>
              <GridRow label="Associated TEO:">
                <Box sx={{ py: 0.5, px: 1, borderRadius: 1 }}>
                  <TextField size="small"></TextField>
                </Box>
              </GridRow>
              <GridRow label="Associated CCR:">
                <Box sx={{ py: 0.5, px: 1, borderRadius: 1 }}>
                  <TextField size="small"></TextField>
                </Box>
              </GridRow>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <GridRow label="E1 Tracking Status:">
                <Box sx={{ borderRadius: 1 }}>New</Box>
              </GridRow>
              <GridRow label="Assignment Input Status:">
                <Box sx={{ borderRadius: 1 }}>N/A</Box>
              </GridRow>
              <GridRow label="Detailed Engineering Complete:">
                <Box sx={{ borderRadius: 1 }}>N/A</Box>
              </GridRow>
              <GridRow label="Build Mile Stone:">
                <Box sx={{ borderRadius: 1 }}>N/A</Box>
              </GridRow>
              <GridRow label="In-Effect MileStone:">
                <Box sx={{ borderRadius: 1 }}>N/A</Box>
              </GridRow>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <GridRow label="Expedite:">
                <Box sx={{ borderRadius: 1 }}>
                  <input type="checkbox"></input>
                </Box>
              </GridRow>
              <GridRow label="Notify NMA">
                <Box sx={{ borderRadius: 1 }}>
                  <input type="checkbox"></input>
                </Box>
              </GridRow>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2}>
            <Grid size={{ xs: 6, md: 4 }}>
              <GridRow label="CCD">
                <Box sx={{ borderRadius: 1 }}>CCDValue</Box>
              </GridRow>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

const GridRow = ({ label, children }) => (
  <Grid container spacing={2} sx={{ mb: 1 }}>
    {/* Label Column: Half-width on small screens, full-width on extra-small, left-aligned */}
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        paddingTop: "0px !important",
      }}
    >
      {label}
    </Grid>

    <Grid item xs={12} sm={6} sx={{ paddingTop: "0px !important" }}>
      <Box sx={{ width: "100%" }}>{children}</Box>
    </Grid>
  </Grid>
);
