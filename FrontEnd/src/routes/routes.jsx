import { Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/Signup";
import ProtectedRoute from "./ProtectRoutes";
import Login from "../pages/Auth/Login";
import AddUser from "../pages/User/AddUser";
import DisplayUserData from "../pages/User/DisplayUserData";
import MapContainer from "../components/Map/MapContainer";
import MapWithMarker from "../pages/Maps/MapWithMarker";

const commonRoutes = [
  { path: "/home", element: <Home /> },
  { path: "*", element: <h1>Route not Found</h1> },
];

const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
];

const protectedRoutes = [
  { path: "/displayUserData", element: <DisplayUserData /> },
  { path: "/addUser", element: <AddUser /> },
  { path: "/addUser/:id", element: <AddUser /> },
  {
    path: "/maps",
    element: <MapWithMarker></MapWithMarker>,
  },
];

const routes = (isLoggedIn) => {
  return isLoggedIn
    ? [...protectedRoutes, ...commonRoutes]
    : [...publicRoutes, ...commonRoutes];
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
