import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import "./App.css";

// Component imports (okay to delete if not used)
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
