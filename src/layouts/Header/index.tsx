import { signOut, useSession } from "next-auth/react";
import React from "react";

import HeaderStyles from "./Header.module.scss";

const Header = () => {
  const handleSignOut = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    signOut();
  };
  return (
    <header
      className={`header navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow ${HeaderStyles.header}`}
    >
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        Company name
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#" onClick={handleSignOut}>
            Sign out
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
