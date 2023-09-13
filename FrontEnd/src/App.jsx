import { useRoutes } from "react-router-dom";
import "./App.css";

import routes from "./routes/routes";
import NavBar from "./components/NavBar/NavBar";
import { useSelector } from "react-redux";

function App() {
  const { isLoggedIn } = useSelector((state) => state?.auth);
  const routing = useRoutes(routes(isLoggedIn));
  return (
    <>
      <NavBar></NavBar>
      {routing}
    </>
  );
}

export default App;
