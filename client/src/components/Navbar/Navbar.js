import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  state = {
    nav: "root"
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ nav: e.target.getAttribute("data") });
    this.props.handleSetPage(e.target.getAttribute("data"));
    console.log("CLICKED");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active title">
            <a className="nav-link">
              <h5 className="appname">Coffee . Tea . Mate</h5>
            </a>
          </li>
          <li className="nav-item active tab">
            <a onClick={this.handleClick} data={"root"} className="nav-link">
              Find A Mate
            </a>
          </li>
          <li className="nav-item active tab">
            <a onClick={this.handleClick} data={"saved"} className="nav-link">
              My Mates
            </a>
          </li>
          <li className="nav-item active tab">
            <a onClick={this.handleClick} data={"profile"} className="nav-link">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
