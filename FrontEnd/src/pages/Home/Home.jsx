import React from "react";
import { Box, Button, Container } from "@mui/material";
import UserDetailForm from "../../components/Form/userDetailForm";
import NavBar from "../../components/NavBar/NavBar";
import SignUp from "../Auth/Signup";
import UserCard from "../../components/Card/UserCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ width: "1200px", marginTop: "100px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        <Link to="/form">
          <Button variant="outlined"> Add User </Button>
        </Link>
      </Box>

      <UserCard></UserCard>
    </Container>
  );
};

export default Home;
