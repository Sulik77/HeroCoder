import React, { Component } from 'react';
import DialogRegistration from './DialogRegistration';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class Registration extends Component {
  state = {
    isOpen: false,
    username: "",
    email: "",
    password: "",
    error: ""
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    this.setState({ error: "" })
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
      this.setState({
        username: "",
        email: "",
        password: "",
        error: data.error
      });
      console.log(this.state);


    } else {
      this.setState({ isOpen: false });
      this.props.history.push("/#");
    }
  };



  render() {
    return (
      <div className='register'>
        <Button variant="primary" type="button" onClick={(e) => this.setState({ isOpen: true })}>Registration</Button>
        <DialogRegistration isOpen={this.state.isOpen} onClose={(e) => {
          this.setState({ isOpen: false })
        }}>
          <Form onSubmit={this.onSubmit}>
            <p className="error">{this.state.error}</p>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nickname</Form.Label>
              <Form.Control name="username" onChange={this.onChange} required type="text" placeholder="Enter your nickname" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" onChange={this.onChange} required type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" onChange={this.onChange} value={this.state.password} required type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Registration
  </Button>
          </Form>
        </DialogRegistration>
      </div >
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
)(withRouter(Registration));