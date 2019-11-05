import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import FightApp from "./FightComponents/FightApp";
import PvEBoard from "./FightComponents/PvEContant/PvEBoard";
import Faq from "../components/FAQ";
import Skills from "../components/skills";
import loginForm from "./login-form";
import FightLocation from "./FightComponents/FightLocation";
import Example from "../components/modalka"
import Test from "./test";


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
          <Route exact path="/figth/pve/fight" component={PvEBoard} />
          <Route exact path="/modalka" component={Example} />
          <Route exact path="/test" component={Test} />


        </div>
      </Router>
    );
  }
}

export default App;
