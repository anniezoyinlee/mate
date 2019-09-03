import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Savedmate from "./pages/Savedmate";
import Profile from "./pages/Profile";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

class App extends React.Components {

render(){
  return(
    <Router basename="/">
    <div>
      <Navbar />
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/mate" component={Savedmate} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  </Router>
  )
}
  
}

export default App;
