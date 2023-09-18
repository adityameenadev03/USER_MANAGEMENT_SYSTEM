import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MapSearchInput = ({ cityName, setCityName, handleSearchInput }) => {
  return (
    <Box>
      <TextField
        sx={{ zIndex: 6 }}
        label="Enter City Name"
        variant="outlined"
        onChange={(e) => setCityName(e.target.value)}
        onBlur={handleSearchInput}
        value={cityName}
      />

      {/* <Button onClick={handleSearchInput} size="large" variant="contained">
        Search
      </Button> */}
    </Box>
  );
};

export default MapSearchInput;
