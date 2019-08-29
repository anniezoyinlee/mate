import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active title">
        <a className="nav-link" href="/">
          <h5 className = "appname">Coffee . Tea . Mate</h5>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link tab" href="/profile">
          Profile
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link tab" href="/mate">
          My Mates
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link tab" href="/search">
          Search
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
