import React, { Component } from 'react';
import Dialog from './Dialog';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { loginAC } from "../../redux/actions";
import { connect } from "react-redux";
import { withRouter } from 'react-router';

class Modal extends Component {
  state = {
    isOpen: false,
    email: "",
    password: "",
    error: null
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = async e => {
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
      console.log(this.state);

    } else {
      this.props.history.push("/homepage");
      this.props.login(data);
      this.setState({ isOpen: false });
      console.log(this.state);
      
    }
  };

  render() {
    return (
      <div className='dialog'>

        <Button variant="primary" type="button" onClick={(e) => this.setState({ isOpen: true })}>Login</Button>

        <Dialog isOpen={this.state.isOpen} onClose={(e) => {
          this.setState({ isOpen: false })
          }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                  <Form.Control name="email" onChange={this.handleInput} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={this.handleInput} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={this.onClick} variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Dialog>

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
)(withRouter(Modal));