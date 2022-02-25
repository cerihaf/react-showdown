import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex justify-end">
          <li className="mx-1 text-xl p-2">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex justify-end">
          <li className="mx-1 text-xl p-2">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 text-xl p-2">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex justify-between px-1 bg-charcoal">
      <h1 className="font-brand text-3xl tracking-wide p-2">
        <Link to="/">
          <span role="img" aria-label="">🐍</span>
          Animal Showdown 2.0
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
