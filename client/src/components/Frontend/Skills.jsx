import React from 'react';
import { Link } from "react-router-dom";
import Skil from "./Skil"

import "./Skills.css";
export default class Skills extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      skills: []
    }
  }


  componentDidMount = async () => {
    let resp = await fetch("/api/skills", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
    const data = await resp.json();
    this.setState({ skills: data })
  }


  render() {

    return (

      <div className="body">
        <Link to="/">
          <div className="home">Home Page</div>
        </Link>
        <div className='perks-title--wrap'>
          <div className="perks-title">JS</div>
          <div className="perks-title">CSS</div>
          <div className="perks-title">HTML</div>
        </div>
        <div className="container-perks">
          {this.state.skills.map((element, index) => (
            <Skil data={element} key={index} />
          ))}
        </div>
      </div>
    )
  };
}