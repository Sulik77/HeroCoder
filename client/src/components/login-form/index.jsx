import React, { Component } from "react";
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";
// import Form from 'react-bootstrap/Form';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    let resp = await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    const data = await resp.json();
    if (data.status === 1) {
      this.setState({ error: data.error });
    } else {
      this.props.history.push("/");
      this.props.login(data);
    }
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleImput}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleImput}
          />
          <button onClick={this.onSubmit}>LOGIN</button>
          {this.state.error && <div>{this.state.error}</div>}
        </form>
      </div>
      // <Form>
      //   <Form.Group controlId="formGroupEmail">
      //     <Form.Label>Email address</Form.Label>
      //     <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleImput} />
      //   </Form.Group>
      //   <Form.Group controlId="formGroupPassword">
      //     <Form.Label>Password</Form.Label>
      //     <Form.Control type="password" placeholder="Password" value={this.state.email} onChange={this.handleImput} />
      //     <button onClick={this.onSubmit}>LOGIN</button>
      //     {this.state.error && <div>{this.state.error}</div>}
      //   </Form.Group>
      // </Form>
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
)(Login);