import React from 'react';
import { Link } from "react-router-dom";

import "./Skills.css";
class Skills extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render(){
        return (
      <div className="body">
        <Link to="/">
          <div className="home">Home Page</div>
        </Link>
        <table className="table" rules="none" align="center" cellPadding="30px">
          <tr>
              <td>Умение 1</td>
              <td>Умение 2</td>
              <td>Умение 3</td>
              <td>Умение 4</td>
            </tr>
            <tr>
              <td>Умение 5</td>
              <td>Умение 6</td>
              <td>Умение 7</td>
              <td>Умение 8</td>
            </tr>
            <tr>
              <td>Умение 9</td>
              <td>Умение 10</td>
              <td>Умение 11</td>
              <td>Умение 12</td>
            </tr>
        </table>
      </div>
    )
  }

}

export default Skills;