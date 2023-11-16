import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 fst-italic fw-bold" to="/">
            Bike Room
          </Link>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
