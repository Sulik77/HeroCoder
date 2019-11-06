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

  }



  render() {
    return (
      
        <div className='register'>

          <Button variant="primary" type="button" onClick={(e) => this.setState({ isOpen: true })}>Registration</Button>
          <DialogRegistration isOpen={this.state.isOpen} onClose={(e) => {
            this.setState({ isOpen: false })
          }}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nick name</Form.Label>
                <Form.Control placeholder="nick name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
    </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
  </Button>
            </Form>
            </DialogRegistration>

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
)(withRouter(Registration));