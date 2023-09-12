import React from "react";
import { Box, Container } from "@mui/material";
import UserDetailForm from "../components/Form/userDetailForm";
import NavBar from "../components/NavBar/NavBar";
import SignUp from "./Signup";

const Home = () => {
  return (
    <Container>
      {" "}
      <Box
        sx={{
          width: 600,
          padding: "20px 20px",
          boxShadow: 3,
          borderRadius: "8px",
          border: "2px solid",
          borderColor: "lightgray",
          //   height: 500,
          //   backgroundColor: "gray",
        }}
      >
        <UserDetailForm></UserDetailForm>
      </Box>
    </Container>
  );
};

export default Home;
