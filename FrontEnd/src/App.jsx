import { useRoutes } from "react-router-dom";
import "./App.css";

import routes from "./routes/routes";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const routing = useRoutes(routes());
  return (
    <>
      <NavBar></NavBar>
      {routing}
    </>
  );
}

export default App;
