import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import FightApp from "../FightComponents/FightApp";
import PvEBoard from "../FightComponents/PvEContant/PvEBoard";
import HomePage from "../homepage";
import Skills from "../skills";
import loginForm from "../login-form";
import Registration from "../registration";
import Faq from "../FAQ";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={loginForm} />
          <Route exact path="/" component={Faq} />
          <Route exact path="/skill" component={Skills} />
          <Route exact path="/figth" component={FightApp} />
          <Route exact path="/figth/pve" component={PvEBoard} />
        </div>
      </Router>
    );
  }
}

export default App;

