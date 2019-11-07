import React from "react";
import "./HomeCss.css";
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class HomePage extends React.Component {


  componentDidMount = async () => {
    const login = await fetch("/api/check-sesion", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const session = await login.json();
    console.log("session", session);

    const resp = await fetch("/api/update-store", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(session)
    });

    const data = await resp.json();
    this.props.login(data);
  }

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
