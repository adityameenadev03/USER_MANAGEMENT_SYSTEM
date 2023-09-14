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
    <Box sx={{ display: "flex", marginBottom: "50px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{
          padding: "0 80px",
          backgroundColor: "#fafafa",
          color: "#424242",
        }}
      >
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
            YuvaSoft
          </Typography>
          <Box
            // sx={{ display: { xs: "none", sm: "block" } }}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 4,
              verticalAlign: "center",
            }}
          >
            <Link to="/" className="link_tag">
              <Typography
                color="#212121"
                // sx={{
                //   color: "#424242",
                // }}
              >
                Home
              </Typography>
            </Link>
            {isLoggedIn && (
              <>
                <Typography sx={{ color: "#424242" }}>
                  Hi, {user.name}
                </Typography>
                <Button
                  sx={{ color: "#fff" }}
                  onClick={logoutUser}
                  variant="contained"
                >
                  Logout
                </Button>
              </>
            )}
            {!isLoggedIn && (
              <>
                {" "}
                <Link to="/login">
                  <Button sx={{ color: "#fff" }} variant="contained">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button sx={{ color: "#fff" }} variant="contained">
                    SignUp
                  </Button>
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
