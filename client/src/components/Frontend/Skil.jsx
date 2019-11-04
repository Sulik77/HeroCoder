import React from 'react';
import { Link } from "react-router-dom";


import "./Skil.css";
class Skil extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data

    return (
      <div className="skil">
        <Link to="/skill/123">
          {/* <div className="html">{data.title}</div> */}
          <img src={data.image} alt=""/>
        </Link>
      </div>
    )
  }

}

export default Skil;