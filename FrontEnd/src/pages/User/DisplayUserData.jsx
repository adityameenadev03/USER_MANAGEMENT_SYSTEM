import React, { useEffect } from "react";
import { Box, Button, Container } from "@mui/material";
import UserCard from "../../components/Card/UserCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../redux/actions/userActions";

const DisplayUserData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers("/userData/getAllUsers"));
  }, []);

  return (
    <Container sx={{ width: "100%", marginTop: "100px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/addUser">
          <Button
            variant="contained"
            sx={{
              marginBottom: 6,
              marginTop: 2,
            }}
          >
            Add User{" "}
          </Button>
        </Link>
      </Box>
      <UserCard></UserCard>
    </Container>
  );
};

export default DisplayUserData;
