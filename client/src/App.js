import React from "react";
import Search from "./pages/Search";
import Savedmate from "./pages/Savedmate";
import Profile from "./pages/Profile";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    page: "root"
  };

  handleSetPage = page => {
    this.setState({ page: page });
  };

  render() {
    return (
      <div>
        <Navbar handleSetPage={this.handleSetPage} />
        <Jumbotron />
        {this.state.page === "root" ? (
          <Search></Search>
        ) : this.state.page === "saved" ? (
          <Savedmate></Savedmate>
        ) : (
          <Profile></Profile>
        )}
      </div>
    );
  }
}

export default App;
