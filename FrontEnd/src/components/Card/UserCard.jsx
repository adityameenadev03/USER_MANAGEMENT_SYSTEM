import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserCard = () => {
  const userData = useSelector((state) => state?.users?.dataArray);
  console.log(userData);
  return (
    <>
      {userData?.map((userItem) => {
        return (
          <Card sx={{ maxWidth: 345, marginRight: "20px" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {userItem?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {userItem?.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {userItem?.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {userItem?.gender}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/form/${userItem?.personId}`}>
                <Button size="small">Edit</Button>
              </Link>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default UserCard;
