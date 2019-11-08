import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import FightApp from "./FightComponents/FightApp";
import Faq from "../components/FAQ";
import Skills from "../components/skills";
import FightLocation from "./FightComponents/FightLocation";
import Test from "./test";
import MoveLocation from "./FightComponents/MoveLocation/MoveLocation";
import PvEBoard from "./FightComponents/PvEContant/PvEBoard";
import HomePage from "./homepage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkSession: false
    };
  }

  componentDidMount = async () => {
    const resp = await fetch("/api/check-session", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();
    if (data) {
      this.setState({ checkSession: true });
    }
  };

  render() {
    return (
      <Router>
        <div className="full-screen">

          {this.state.checkSession ?
            <>
              <Route exact path="/skill" component={Skills} />
              <Route exact path="/fight" component={FightApp} />
              <Route
                exact
                path="/figth/pve/locations"
                component={FightLocation}
              />
              <Route exact path="/figth/pve/fight" component={PvEBoard} />
              <Route exact path="/skill/test" component={Test} />
              <Route exact path="/homepage" component={HomePage} />
              <Route
                path="/figth/pve/locations/:location"
                component={MoveLocation}
              />
            </>
            :
            <></>}

          <Route exact path="/" component={Faq} />
        </div>
      </Router>
    );
  }
}
