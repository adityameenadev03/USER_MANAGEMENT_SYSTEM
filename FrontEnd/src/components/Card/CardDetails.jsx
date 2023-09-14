import React, { useState } from "react";
import DeleteModal from "../Modals/DeleteModal";
import { Link } from "react-router-dom";
import { MdDelete, MdEditSquare } from "react-icons/md";

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

const CardDetails = ({ userItem }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CardContent sx={{ minHeight: "180px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {userItem?.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Email :{" "}
          {userItem?.email.length <= 17
            ? userItem?.email
            : `${userItem?.email.slice(0, 17)}...`}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Phone : {userItem?.phone}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Gender: {userItem?.gender}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={`/addUser/${userItem?.personId}`}>
          {/* Edit */}
          <MdEditSquare color="lightblue" size="24"></MdEditSquare>
          {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
        </Link>
        <Button size="small">
          <MdDelete color="red" size="24" onClick={handleOpen}></MdDelete>
        </Button>

        <DeleteModal
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
          deleteId={userItem?._id}
        ></DeleteModal>
      </CardActions>
    </>
  );
};

export default CardDetails;
