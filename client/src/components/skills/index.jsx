import Skill from "../skill"
import "./Skills.css";
import React from "react";
import { Link } from "react-router-dom";
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";

class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: []
    }
  }

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
    this.props.login(data);

    
    const respGetSkills = await fetch("/api/skills", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
    const dataSkills = await respGetSkills.json();
    this.setState({ skills: dataSkills })
  }


  render() {
    return (

      <div className="body">
        <Navbar className="bar" expand="lg" fixed="top" variant="dark">
            <Navbar.Brand>HeroCoder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <div className="registration">
                  <Link className="profile-link" to="/homepage">
                    <span>HomePage</span>
                  </Link>
                </div>
                <div>
                  <Link className="profile-link" to="/fight">
                    <span>Fight</span>
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        <div className='perks-title--wrap'>
          <div className="perks-title">JS</div>
          <div className="perks-title">CSS</div>
          <div className="perks-title">HTML</div>
        </div>
        <div className="container-perks">
          {this.state.skills.map((element, index) => (
            <Skill data={element} key={index} />
          ))}

        </div>
      </div>
    )
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
)(Skills);