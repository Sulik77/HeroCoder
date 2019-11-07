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
import { loginAC } from "../redux/actions";
import { connect } from "react-redux";

export default class App extends React.Component {

  // componentDidMount = async () => {
  //   const resp = await fetch("/api/check-sesion", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   });
  //   const data = await resp.json();
  //   console.log("App", data);
  //   if (data.status === 1) {
  //     this.setState({ error: data.error });
  //   } else {
  //     this.props.login(data);
  //   }
  // }

  render() {
    return (
      <Router>
        <div className="full-screen">
          <Route exact path="/" component={Faq} />
          <Route exact path="/skill" component={Skills} />
          <Route exact path="/fight" component={FightApp} />
          <Route exact path="/figth/pve/locations" component={FightLocation} />
          <Route exact path="/figth/pve/fight" component={PvEBoard} />
          <Route exact path="/skill/test" component={Test} />
          <Route exact path="/test" component={MoveLocation} />
          <Route exact path="/homepage" component={HomePage} />
          <Route
            path="/figth/pve/locations/:location"
            component={MoveLocation}
          />

        </div>
      </Router>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     login: data => dispatch(loginAC(data))
//   };
// }

// export default connect(
//   null,
//   mapDispatchToProps
// )(App);
