import React from "react";
import "./locationBacgrounds.css";
import "./moveLocation.css";

import PvEBoard from "../PvEContant/PvEBoard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { loginAC } from "../../../redux/actions";

class MoveLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      locationImage: 0,
      fight: false,
      locationParams: "",
      logsMove: ""
    };
  }

  componentDidMount = async () => {
    console.log(this.props.player);

    const login = await fetch("/api/check-session", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const session = await login.json();
    console.log("session", session);

    const resp = await fetch("/api/update-store", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(session)
    });

    const data = await resp.json();
    console.log("data", data);

    this.props.login(data);

    const params = this.props.match.params.location;
    const playerInitial = JSON.parse(JSON.stringify(this.props.player));

    this.setState({
      locationParams: params,
      player: playerInitial
    });
  };

  moveNext = () => {
    let data = this.state.locationImage;
    let number = Math.floor(Math.random() * 5);
    if (number === data) {
      number = Math.floor(Math.random() * 5);
    } else {
      this.setState({
        locationImage: number
      });
    }
    const random = Math.floor(Math.random() * 4);
    if (random === 2) {
      this.setState({
        fight: true
      });
    } else if (random === 0) {
      const trapPlayer = this.state.player;
      const damageTrap = Math.floor(
        (trapPlayer.stats.health * Math.floor(Math.random() * 10)) / 100
      );
      trapPlayer.stats.health -= damageTrap;

      this.setState({
        logsMove: `я попал в ловушку и получил ${damageTrap} единиц урона`
      });
    } else {
      this.setState({
        logsMove: "Ничего интересного, надо идти дальше"
      });
    }
  };

  render() {
    if (this.state.fight) {
      return (
        <div
          className={`location-going-layaout--${this.state.locationParams}-${this.state.locationImage}`}
        >
          <div className="location-going-fight">
            <PvEBoard player={this.state.player} />
          </div>
        </div>
      );
    }

    return (
      <div
        className={`location-going-layaout--${this.state.locationParams}-${this.state.locationImage}`}
      >
        <div className="move-wrap">
          <div className="move-logs">
            <span className="move-logs--desc">События:</span>
            <div className="move-logs--value"> {this.state.logsMove} </div>
          </div>
          <div className="move-stats">
            <div>
              <span className="move-stats--desc">Здоровье:</span>{" "}
              <span className="move-stats--value">
                {this.state.player && this.state.player.stats.health}
              </span>
            </div>
            <div>
              <span className="move-stats--desc">Урон:</span>{" "}
              <span className="move-stats--value">
                {this.state.player && this.state.player.stats.damage}
              </span>
            </div>
          </div>
          <button className="move-btn move-btn_next" onClick={this.moveNext}>
            Двигаться дальше
          </button>
          <Link className="move-btn_link" to="/homepage">
            <button className="move-btn move-btn_back" onClick={this.moveNext}>
              Вернуться в город
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    player: store.user.player
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: data => dispatch(loginAC(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveLocation);
