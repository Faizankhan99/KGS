import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Navbar from "./Components/AllRoutes/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
