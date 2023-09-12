import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/Signup";

const routes = () => [
  {
    path: "/",
    element: true ? <Home></Home> : <Navigate to="/login" />,
  },
  {
    path: "/signup",
    element: true ? <SignUp></SignUp> : <Navigate to="/login" />,
  },
];

export default routes;
