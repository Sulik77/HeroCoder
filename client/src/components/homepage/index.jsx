import React from "react";
import "./HomeCss.css";
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="fonHome">
        <Navbar className="bar" expand="lg" fixed="top" variant="dark">
          <Navbar.Brand href="/homepage">HeroCoder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <div className="registration">
                <Link to="/skill">Skills</Link>
              </div>
              <div>
                <Link to="/fight">Fight</Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: data => dispatch(loginAC(data))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
