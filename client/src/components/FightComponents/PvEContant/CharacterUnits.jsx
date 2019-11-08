import React from "react";
import "./../pveboard.css";

class CharacterUnits extends React.Component {
  takeOponent = () => {
    const req = this.props.oponent;
    return req;
  };

  render() {
    return (
      <div className="oponent-wrap">
        <div className="oponent-avatar">
          <img src={this.takeOponent().avatar} alt="avatar" />
        </div>
        <div className="oponent-name">{this.takeOponent().name}</div>
        <div className="oponent-stas__log"> Характеристики: </div>
        <div className="oponent-stas-wrap">
          <div className="oponent-stats">
            <img
              src="https://www.onlygfx.com/wp-content/uploads/2019/02/6-pixel-heart-4.png"
              alt="health"
            />{" "}
            <span> {this.takeOponent().stats.health} </span>
          </div>
          <div className="oponent-stats">
            <img
              src="https://i.ya-webdesign.com/images/pixel-sword-png-7.png"
              alt="damage"
            />{" "}
            <span> {this.takeOponent().stats.damage} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterUnits;
