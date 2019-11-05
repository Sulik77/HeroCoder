import React from "react";
import { Link } from "react-router-dom";

import "./Skil.css";
class Skil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    console.log(this.props.data);

    const desc =
      data.title +
      "\n" +
      data.opisanie +
      "\n" +
      "увеличение урона: +" +
      data.params.damage;

    return (
      <div className="skil-wrap">
        <Link to="/skill/123">
          <div className="skil" title={desc}>
            <img src={data.image} alt="" />
          </div>
        </Link>
      </div>
    );
  }
}

export default Skil;
