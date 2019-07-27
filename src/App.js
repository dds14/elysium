import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import "./App.css";

import Form from "./components/Form/Form";
import Link from "./components/Link/Link";

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* <Form /> */}
        {/* <Link /> */}
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
