import React from 'react';
import { Link } from "react-router-dom";


import "./Skil.css";
class Skil extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data
    const desc = data.title + "\n" + data.opisanie +'\n' + 'увеличение урона: +' + data.params.damage 

    return (
        <Link to="/skill/123">
      <div className="skil" title={desc}>
          <img src={data.image} alt=""/>
      </div>
        </Link>
    )
  }

}

export default Skil;