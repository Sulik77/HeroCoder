import React from "react";
import "./../pveboard.css";

class CharacterUnits extends React.Component {
  render() {
    return (
      <div className="oponent-wrap">
        <div className="oponent-avatar">
          <img src={this.props.oponent.avatar} alt="avatar" />
        </div>
        <div className="oponent-name">{this.props.oponent.name}</div>
        <div className="oponent-stas__log"> Stats: </div>
        <div className="oponent-stas-wrap">
          <div className="oponent-stats">
            health: <span> {this.props.oponent.stats.health} </span>
          </div>
          <div className="oponent-stats">
            damage: <span> {this.props.oponent.stats.damage} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterUnits;
