import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import FightApp from "./FightComponents/FightApp";
import Faq from "../components/FAQ";
import Skills from "../components/skills";
import loginForm from "./login-form";
import FightLocation from "./FightComponents/FightLocation";
import MoveLocation from "./FightComponents/MoveLocation/MoveLocation";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="full-screen">
          <Route exact path="/" component={Faq} />
          <Route exact path="/login" component={loginForm} />
          <Route exact path="/skill" component={Skills} />
          <Route exact path="/figth" component={FightApp} />
          <Route exact path="/figth/pve/locations" component={FightLocation} />
          <Route exact path="/test" component={MoveLocation} />
          <Route
            path="/figth/pve/locations/:location"
            component={MoveLocation}
          />
        </div>
      </Router>
    );
  }
}

export default App;
