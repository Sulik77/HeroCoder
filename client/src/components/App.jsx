import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import FightApp from "./FightComponents/FightApp";
import FightLocation from "./FightComponents/FightLocation";
import PvEBoard from "./FightComponents/PvEContant/PvEBoard";
import MoveLocation from "./FightComponents/MoveLocation/MoveLocation";

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
