import React from "react";
import "./HomeCss.css";
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'

class HomePage extends React.Component {


  componentDidMount = async () => {
    const login = await fetch("/api/check-session", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const session = await login.json();

    const resp = await fetch("/api/update-store", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(session)
    });
    const data = await resp.json();
    console.log(data);
    this.props.login(data);
  }

  logout = async () => {
    const resp = await fetch("/api/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();
    if(data){
      this.props.history.push("/")
    }
  }
  

  render() {
    return (
      <div className="fonHome">
        <Navbar className="bar" expand="lg" fixed="top" variant="dark">
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
              <button onClick={this.logout}>
                Logout
              </button>
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

export default withRouter(connect(
  null,
  mapDispatchToProps
)(HomePage));
