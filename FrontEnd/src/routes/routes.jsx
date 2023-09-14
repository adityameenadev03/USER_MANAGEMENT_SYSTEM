import { Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/Signup";
import ProtectedRoute from "./ProtectRoutes";
import Login from "../pages/Auth/Login";
import AddUser from "../pages/User/AddUser";

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

const publicRoutes = [
  { path: "/login", element: <Login></Login> },
  { path: "/signup", element: <SignUp></SignUp> },
];
const protectedRoutes = [
  { path: "/", element: <Home></Home> },
  { path: "/addUser", element: <AddUser></AddUser> },
  { path: "/addUser/:id", element: <AddUser></AddUser> },
];

const routes = (isLoggedIn) => {
  return isLoggedIn ? protectedRoutes : publicRoutes;
};
export default routes;
