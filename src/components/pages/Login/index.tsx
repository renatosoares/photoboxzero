import { useAuth } from "hooks/use-auth";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

import "./styles.scss";

type UseLocationLoginProps = {
  from: { pathname: string };
};

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const auth = useAuth();

  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let value = event.currentTarget?.value || "";

    setInputEmail(value);
  };

  const handleChangePassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let value = event.currentTarget?.value || "";

    setInputPassword(value);
  };

  let history = useHistory();
  let location = useLocation<UseLocationLoginProps>();

  let { from }: UseLocationLoginProps = location.state || {
    from: { pathname: "/" },
  };

  useEffect(() => {
    if (auth.user) {
      history.replace(from);
    }
  }, [auth.user]);

  return (
    <div className="d-flex">
      <main className="form-signin">
        <div className="mb-4">
          <i className="bi bi-person-circle"></i>
        </div>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={inputEmail}
            onChange={handleChangeEmail}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            type="password"
            value={inputPassword}
            onChange={handleChangePassword}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          onClick={() => auth.signin(inputEmail, inputPassword)}
        >
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </main>
    </div>
  );
};

export default Login;
