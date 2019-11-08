import React from 'react';

import "./Branch.css";
class Branch extends React.Component {
  constructor(props) {
    super(props)
  }

  backgrounds = {
    one: '-40px -40px',
    two: '-80px -80px'
  };

  render(){
    const styles = {backgroundPosition: this.backgrounds[this.props.variant]}
    return (
      <div className="font" style={styles}>&nbsp;</div>
    )
  }

}

export default Branch;