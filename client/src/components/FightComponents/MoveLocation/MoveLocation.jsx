import React from "react";
import "./locationBacgrounds.css";
import "./moveLocation.css";

import PvEBoard from "../PvEContant/PvEBoard";
import { Link } from "react-router-dom";

class MoveLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationImage: 0,
      fight: false,
      locationParams: ""
    };
  }
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
    const random = Math.floor(Math.random() * 3);
    if (random === 2) {
      this.setState({
        fight: true
      });
    }
  };

  componentDidMount() {
    const params = this.props.match.params.location;
    this.setState({
      locationParams: params
    });
  }

  render() {
    if (this.state.fight) {
      return (
        <div
          className={`location-going-layaout--${this.state.locationParams}-${this.state.locationImage}`}
        >
          <div className="location-going-fight">
            <PvEBoard />
          </div>
        </div>
      );
    }

    return (
      <div
        className={`location-going-layaout--${this.state.locationParams}-${this.state.locationImage}`}
      >
        <div className="move-wrap">
          <button className="move-btn move-btn_next" onClick={this.moveNext}>
            Двигаться дальше
          </button>
          <Link className="move-btn_link" to="/">
            <button className="move-btn move-btn_back" onClick={this.moveNext}>
              Вернуться в город
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MoveLocation;
