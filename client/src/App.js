import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Savedmate from "./pages/Savedmate";
import Profile from "./pages/Profile";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Jumbotron />
      <Switch>
        <Route path="/" component={Search} />
        <Route path="/search" component={Search} />
        <Route path="/mate" component={Savedmate} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  </Router>
);

export default App;
