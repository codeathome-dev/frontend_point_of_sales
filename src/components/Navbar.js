import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/admin/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/category">
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/history">
                History
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/users">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
