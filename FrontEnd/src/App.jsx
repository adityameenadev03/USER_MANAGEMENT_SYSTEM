import { useNavigate, useRoutes } from "react-router-dom";
import "./App.css";

import routes from "./routes/routes";
import NavBar from "./components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Container } from "@mui/material";
import { useEffect } from "react";

function App() {
  const { isLoggedIn } = useSelector((state) => state?.auth);
  console.log(routes(isLoggedIn));
  const routing = useRoutes(routes(isLoggedIn));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return (
    <Container>
      <NavBar></NavBar>
      <ToastContainer></ToastContainer>
      {routing}
    </Container>
  );
}

export default App;
