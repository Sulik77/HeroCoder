import React, { Component } from 'react';
import Dialog from './Dialog';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Modal extends Component {
  state = {
    isOpen: false
  }
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
        </Dialog>

      </div>
    )
  }
}

export default Modal;