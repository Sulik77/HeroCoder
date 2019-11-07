import Skill from "../skill"
import "./Skills.css";
import React from "react";
import { Link } from "react-router-dom";
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";

class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: []
    }
  }

  componentDidMount = async () => {
    const login = await fetch("/api/check-sesion", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const session = await login.json();
    console.log("session",session);
    
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
    console.log('skills render');


    return (

      <div className="body">
        <Link to="/homepage">
          <div className="home">Home Page</div>
        </Link>
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