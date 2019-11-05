import React from "react";
import { withRouter } from 'react-router'

import "./Skill.css";

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
      learn: false
    }
  }

  onClick = () => {
    this.props.history.push("/test")
  }

  render() {
    const data = this.props.data;
    const desc =
      data.title +
      "\n" +
      data.opisanie +
      "\n" +
      "увеличение урона: +" +
      data.params.damage;

    return (
      <div className="skill-wrap">
        <div onClick={this.onClick} className="skill" title={desc}>
          <img src={data.img} alt="" />
        </div>
      </div>
    );
  }
}

export default withRouter(Skill);
