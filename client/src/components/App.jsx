import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import FightApp from "./FightComponents/FightApp";
import PvEBoard from "./FightComponents/PvEContant/PvEBoard";
import FightLocation from "./FightComponents/FightLocation";
import HomePage from "./Frontend/HomePage";
import Skills from "./Frontend/Skills";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/skill" component={Skills} />
          <Route exact path="/figth" component={FightApp} />
          <Route exact path="/figth/pve/location" component={FightLocation} />
          <Route exact path="/figth/pve/fight" component={PvEBoard} />
        </div>
      </Router>
    );
  }
}

export default App;
