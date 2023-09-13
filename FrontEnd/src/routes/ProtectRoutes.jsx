// import { useSelector } from "react-redux";
// import { Navigate, Route, Routes } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { isLoggedIn } = useSelector((state) => state?.users);
//   return (
//     <Routes>
//       <Route
//         {...rest}
//         render={(props) =>
//           isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />
//         }
//       />
//     </Routes>
//   );
// };

// export default ProtectedRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state?.auth);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;
