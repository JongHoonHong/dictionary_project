import "./App.css";
import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import FormPage from "./FormPage";

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/FormPage" exact component={FormPage} />
    </div>
  );
}

export default App;
