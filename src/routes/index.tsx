import Login from "components/pages/Login";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "routes/home";

const AppRoutes = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  </>
);

export default AppRoutes;
