import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import FightApp from "./FightComponents/FightApp";
import PvEBoard from "./FightComponents/PvEContant/PvEBoard";
import HomePage from "./Frontend/HomePage";
import Skills from "./Frontend/Skills";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
<<<<<<< HEAD
          <Route exact path="/figth" component={FightApp} />
          <Route exact path="/figth/pve" component={PvEBoard} />
=======
          
          <Route exact path="/" component={HomePage} />
          <Route exact path="/skill" component={Skills} />
          <Route exact path="/figth" component={FightApp} />
          <Route exact path="/figth/pve" component={PvEBoard} />
          
>>>>>>> f4edb3c062960d682fb313f5e72314eb6cbadfd1
        </div>
      </Router>
    );
  }
}

export default App;
