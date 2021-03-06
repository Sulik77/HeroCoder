import React from "react";
import "./HomeCss.css";
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

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
    this.props.login(data);

  };

  logout = async () => {
    const resp = await fetch("/api/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const data = await resp.json();
    if (data) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <>
        <div className="fonHome">
          <Navbar className="bar" expand="lg" fixed="top" variant="dark">
            <Navbar.Brand>HeroCoder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <div className="registration">
                  <Link className="profile-link" to="/skill">
                    <span>Навыки</span>
                  </Link>
                </div>
                <div>
                  <Link className="profile-link" to="/fight">
                    <span>Битва</span>
                  </Link>
                </div>
                <div className="profile-link">
                  <span onClick={this.logout}>Выйти</span>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="profile-wrap">
            <div className="profile-container">
              <div className="profile-container-avatar">
                <img
                  src={this.props.user && this.props.user.avatar}
                  alt="avatar"
                />
              </div>
              <div className="profile-container-stats">
                <p className="profile-desc">Характеристики</p>
                <div className="profile-wrap-stats">
                  <div className="profile-container-stats__stats">
                    <span>
                      <img
                        src="https://i.ya-webdesign.com/images/pixel-sword-png-7.png"
                        alt=""
                      />
                    </span>
                    <span>
                      {this.props.user && this.props.user.stats.damage}
                    </span>
                  </div>
                  <div className="profile-container-stats__stats">
                    <span>
                      <img
                        src="https://www.onlygfx.com/wp-content/uploads/2019/02/6-pixel-heart-4.png"
                        alt=""
                      />
                    </span>
                    <span>
                      {this.props.user && this.props.user.stats.health}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-container">
              <div className="skill_title"> Навыки </div>
              <div className="profile-wrap-skills">
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[0] ? (
                      <img
                        src={this.props.user && this.props.user.percs[0].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[1] ? (
                      <img
                        src={this.props.user && this.props.user.percs[1].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[2] ? (
                      <img
                        src={this.props.user && this.props.user.percs[2].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[3] ? (
                      <img
                        src={this.props.user && this.props.user.percs[3].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[4] ? (
                      <img
                        src={this.props.user && this.props.user.percs[4].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[5] ? (
                      <img
                        src={this.props.user && this.props.user.percs[5].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[6] ? (
                      <img
                        src={this.props.user && this.props.user.percs[6].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[7] ? (
                      <img
                        src={this.props.user && this.props.user.percs[7].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[8] ? (
                      <img
                        src={this.props.user && this.props.user.percs[8].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[9] ? (
                      <img
                        src={this.props.user && this.props.user.percs[9].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="profile-skill__wrap">
                  <div className="profile-skill">
                    {this.props.user && this.props.user.percs[10] ? (
                      <img
                        src={this.props.user && this.props.user.percs[10].img}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="profile-wrap-stats profile-wrap-stats--gold">
                <div className="profile-wrap-stats--gold_wrap">
                  <img
                    className="profile-gold"
                    src="https://s1.piq.land/2013/05/12/bd610Y3bdPcokJRR68GA3kJT_400x400.png"
                    alt=""
                  />
                  <span className="profile-gold--value">
                    {this.props.user && this.props.user.gold}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    user: store.user.player
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: data => dispatch(loginAC(data))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
