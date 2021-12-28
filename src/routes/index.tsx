import Darkroom from "components/pages/Darkroom";
import Login from "components/pages/Login";
import { useAuth } from "hooks/use-auth";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "routes/home";

type PrivateRouteProps = {
  children: React.ReactNode;
  path: string;
};

function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const AppRoutes = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/darkroom/:user">
        <Darkroom />
      </PrivateRoute>
    </Switch>
  </>
);

export default AppRoutes;
