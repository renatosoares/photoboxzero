import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

import HeaderStyles from "./Header.module.scss";

const Header = () => {
  const { data: session } = useSession();

  const handleSignOut = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    signOut();
  };
  return (
    <header className={`header ${HeaderStyles.header}`}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href={{ pathname: "/" }} passHref>
            <a className="navbar-brand fw-bold fst-italic">PhotoBox</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {session ? (
                <>
                  <li>
                    <a href="#" className="nav-link" onClick={handleSignOut}>
                      Sair
                    </a>
                  </li>

                  <li>
                    <Link href={{ pathname: "/admin/darkroom" }} passHref>
                      <a className="nav-link">Carregar Imagens</a>
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link href={{ pathname: "/login" }} passHref>
                    <a className="nav-link">Entrar</a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
