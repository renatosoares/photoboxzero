import React, { useState } from "react";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  return (
    <div className="d-flex">
      <form className="form-signin">
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
            onChange={(event) => setInputEmail(event.target.value)}
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
            onChange={(event) => setInputPassword(event.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </div>
  );
};

export default Login;
