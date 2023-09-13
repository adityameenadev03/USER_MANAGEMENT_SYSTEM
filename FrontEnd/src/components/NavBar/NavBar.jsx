import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { REMOVE_USER } from "../../redux/actions/types";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoggedIn } = useSelector((state) => state?.auth);
  console.log(user);
  const logoutUser = () => {
    dispatch(REMOVE_USER());
    navigate("/login");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            SYSMANAGE
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <Button sx={{ color: "#fff" }}>Home</Button>
            </Link>
            {isLoggedIn && (
              <>
                <Button sx={{ color: "#fff" }}>
                  <Typography>Hi, {user.email}</Typography>
                </Button>
                <Button sx={{ color: "#fff" }} onClick={logoutUser}>
                  Logout
                </Button>
              </>
            )}
            {!isLoggedIn && (
              <>
                {" "}
                <Link to="/login">
                  <Button sx={{ color: "#fff" }}>Login</Button>
                </Link>
                <Link to="/signup">
                  <Button sx={{ color: "#fff" }}>SignUp</Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
