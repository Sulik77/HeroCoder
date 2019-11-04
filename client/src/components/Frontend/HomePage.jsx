import React from "react";
import { Link } from "react-router-dom";
import Branch from "./Branch";


import "./HomeCss.css";
class HomePage extends React.Component {

  render() {
    return (
    <div className="fon"> 
      <div className="game">
        <Link to="/figth">
          <div className="fightApp__pve">GAME</div>
        </Link>
        <Link to="/skill">
          <div className="skill">Skills</div>
        </Link>

        <div>
          A
          <Branch variant="one"></Branch>
          <Branch variant="two"></Branch>
          
        </div>
       
      </div>
    </div>

    );
  }
}

export default HomePage;