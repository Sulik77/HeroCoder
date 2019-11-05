import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Navbar, Form, Button } from 'react-bootstrap';

import "./Faq.css";
class Faq extends React.Component {

  render() {
    return (
      <Router>
        <div className="fon">
          <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
            <Navbar.Brand href="#home">HeroCoder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/figth">Figth</Nav.Link>
                <Nav.Link href="/skill">Skills</Nav.Link>
              </Nav>
              <Nav>
                <Form inline>
                  <Button className="login" type="submit">Login</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="content-z">
            Welcom to the Hero Coder
          </div>
          {/* <Image src="./img/barbarian.jpg" fluid /> */}
        </div>
      </Router>
    );
  }
}

export default Faq;