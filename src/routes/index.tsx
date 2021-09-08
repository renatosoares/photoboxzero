import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "routes/home";

const AppRoutes = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </>
);

export default AppRoutes;
