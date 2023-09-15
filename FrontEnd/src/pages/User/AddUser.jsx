import React from "react";

import { Box, Button, Container } from "@mui/material";

import { Link } from "react-router-dom";
import AddUserFormFormik from "../../components/Form/AddUserFormFormik";
const AddUser = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "1200px",
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Link to="/">
            <Button variant="contained"> Go HOME </Button>
          </Link>
        </Box>
        <Box
          sx={{
            width: 500,
            padding: "20px 20px",
            boxShadow: 3,
            borderRadius: "8px",
            border: "2px solid",
            borderColor: "lightgray",
            margin: "0 auto",
            //   height: 500,
            //   backgroundColor: "gray",
          }}
        >
          <AddUserFormFormik />
        </Box>
      </Container>
    </>
  );
};

export default AddUser;
