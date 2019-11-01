import React from "react";
import { Link } from "react-router-dom";

class FightApp extends React.Component {
  render() {
    return (
      <div className="fightApp-wrap">
        <Link to="/figth/pve">
          <div className="fightApp__pve">PvE</div>
        </Link>
        <Link to="#">
          <div className="fightApp__pvp">PvP</div>
        </Link>
      </div>
    );
  }
}

export default FightApp;
