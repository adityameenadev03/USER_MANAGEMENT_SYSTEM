import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "../Modals/DeleteModal";
import CardDetails from "./CardDetails";

const UserCard = () => {
  const userData = useSelector((state) => state?.users?.dataArray);
  console.log(userData);

  return (
    <>
      <ToastContainer></ToastContainer>
      <Grid
        container
        spacing={2}
        columns={{ xs: 12, sm: 12, md: 12 }}
        elevation={3}
      >
        {userData?.map((userItem) => {
          return (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              elevation={2}
              sx={{ minHeight: "300px" }}
            >
              <Card
                key={userItem?.personId}
                sx={{ width: "100%", borderRadius: "12px" }}
                elevation={2}
              >
                <CardDetails userItem={userItem}></CardDetails>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default UserCard;
