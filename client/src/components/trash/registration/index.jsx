import React, { Component } from "react";


export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      error: null
    };
  }
  handleImput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    let resp = await fetch("/signup", {
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
    }
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            name="username"
            value={this.state.username}
            onChange={this.handleImput}
          />
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
          <button onClick={this.onSubmit}>Registration</button>
          {this.state.error && <div>{this.state.error}</div>}
        </form>
      </div>
    );
  }
}