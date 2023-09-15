import { Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/Signup";
import ProtectedRoute from "./ProtectRoutes";
import Login from "../pages/Auth/Login";
import AddUser from "../pages/User/AddUser";
import DisplayUserData from "../pages/User/DisplayUserData";

const publicRoutes = [{ path: "/home", element: <Home /> }];

const authRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
];
const protectedRoutes = [
  { path: "/displayUserData", element: <DisplayUserData /> },
  { path: "/addUser", element: <AddUser /> },
  { path: "/addUser/:id", element: <AddUser /> },
];

const routes = (isLoggedIn) => {
  return isLoggedIn
    ? [...protectedRoutes, ...publicRoutes]
    : [...publicRoutes, ...authRoutes];
};
export default routes;

// const routes = (isLoggedIn) => [
//   {
//     path: "/",
//     element: (
//       <ProtectedRoute>
//         <Home></Home>
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/addUser",
//     element: (
//       <ProtectedRoute>
//         <AddUser></AddUser>
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/addUser/:id",
//     element: (
//       <ProtectedRoute>
//         <AddUser />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/signup",
//     element: isLoggedIn ? <Navigate to="/"></Navigate> : <SignUp></SignUp>,
//   },
//   {
//     path: "/login",
//     element: isLoggedIn ? <Navigate to="/"></Navigate> : <Login></Login>,
//   },
// ];
