import React, { useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ width: "100%", marginTop: "100px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography variant="h2"> Welcome to Home Page</Typography>
        <Typography variant="h6">
          Please Login in order to Add users data{" "}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
