import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";
import { ProvideAuth } from "hooks/use-auth";

import "./App.scss";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Routes />
      </Router>
    </ProvideAuth>
  );
}

export default App;
