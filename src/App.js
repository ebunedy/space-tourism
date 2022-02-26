import DesignComponent from "./components/DesignComponent";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/destination" element={<Destination />} exact />
          <Route path="/crew" element={<Crew />} exact />
          <Route path="/technology" element={<Technology />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
