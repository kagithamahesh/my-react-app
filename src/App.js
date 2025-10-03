import { Box, Grid, Paper, TextField } from "@mui/material";
import React from "react";

export default function App() {
  return (
    <>
      <Paper
        elevation={4}
        sx={{
          p: 2,
          height: "100%", // Ensures Paper fills the vertical space if content were aligned
          borderRadius: 2,
          bgcolor: "#ffffff",
        }}
      >
        <Grid container spacing={2} mt={2}>
          <Grid size={{ xs: 6, md: 4 }}>
            <GridRow label="CCD">
              <Box sx={{ py: 0.5, px: 1, bgcolor: "#e0e0e0", borderRadius: 1 }}>
                CCDValue
              </Box>
            </GridRow>
            <GridRow label="TEO">
              <Box sx={{ py: 0.5, px: 1, bgcolor: "#e0e0e0", borderRadius: 1 }}>
                TEOValue
              </Box>
            </GridRow>
            <GridRow label="Associated TEO">
              <Box sx={{ py: 0.5, px: 1,  borderRadius: 1 }}>
              <TextField size="small" ></TextField>
              </Box>
            </GridRow>
             <GridRow label="Associated CCR">
              <Box sx={{ py: 0.5, px: 1,  borderRadius: 1 }}>
                <TextField size="small" ></TextField>
              </Box>
            </GridRow>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <GridRow label="CCD">
              <Box sx={{ py: 0.5, px: 1, bgcolor: "#e0e0e0", borderRadius: 1 }}>
                CCDValue
              </Box>
            </GridRow>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <GridRow label="CCD">
              <Box sx={{ py: 0.5, px: 1, bgcolor: "#e0e0e0", borderRadius: 1 }}>
                CCDValue
              </Box>
            </GridRow>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid size={{ xs: 6, md: 4 }}>
            <GridRow label="CCD">
              <Box sx={{ py: 0.5, px: 1, bgcolor: "#e0e0e0", borderRadius: 1 }}>
                CCDValue
              </Box>
            </GridRow>
          </Grid>
        </Grid>
      </Paper>
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
    {/* Value/Input Column: Half-width on small screens, full-width on extra-small */}
    <Grid item xs={12} sm={6} sx={{ paddingTop: "0px !important" }}>
      {/* Ensure the input or value takes up 100% width of the allocated space */}
      <Box sx={{ width: "100%" }}>{children}</Box>
    </Grid>
  </Grid>
);
