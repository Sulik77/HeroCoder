import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import FightApp from "./FightComponents/FightApp";
import FightLocation from "./FightComponents/FightLocation";
import PvEBoard from "./FightComponents/FightLocation";

import Faq from "./FAQ";
import Skills from "./skills";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="full-screen">
          <Route exact path="/" component={Faq} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/skill" component={Skills} />
          <Route exact path="/figth" component={FightApp} />
          <Route exact path="/figth/pve/locations" component={FightLocation} />
          <Route exact path="/figth/pve/fight" component={PvEBoard} />
        </div>
      </Router>
    );
  }
}

export default App;
