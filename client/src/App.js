import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      // <Router basename="*">
      <div>
        <Navbar handleSetPage={this.handleSetPage} />
        <Jumbotron />
        {/* <Switch> */}
        {this.state.page === "root" ? (
          <Search></Search>
        ) : this.state.page === "saved" ? (
          <Savedmate></Savedmate>
        ) : (
          <Profile></Profile>
        )}
        {/* <Route exact path="/" component={Search} />
          <Route path="/search" component={Search} />
          <Route path="/mate" component={Savedmate} />
          <Route path="/profile" component={Profile} /> */}
        {/* </Switch> */}
      </div>
      // </Router>
    );
  }
}

export default App;
