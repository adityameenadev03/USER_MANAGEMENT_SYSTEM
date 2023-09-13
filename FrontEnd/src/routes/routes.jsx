import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/Signup";
import ProtectedRoute from "./ProtectRoutes";
import Login from "../pages/Auth/Login";
import UserDetailForm from "../components/Form/userDetailForm";

const routes = (isLoggedIn) => [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home></Home>
      </ProtectedRoute>
    ),
  },
  {
    path: "/form",
    element: (
      <ProtectedRoute>
        <UserDetailForm></UserDetailForm>
      </ProtectedRoute>
    ),
  },
  {
    path: "/form/:id",
    element: (
      <ProtectedRoute>
        <UserDetailForm></UserDetailForm>
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: isLoggedIn ? <Navigate to="/"></Navigate> : <SignUp></SignUp>,
  },
  {
    path: "/login",
    element: isLoggedIn ? <Navigate to="/"></Navigate> : <Login></Login>,
  },
];

export default routes;
