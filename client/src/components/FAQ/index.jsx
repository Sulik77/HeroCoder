import React from "react";
import { Nav, Navbar} from 'react-bootstrap';
import Modal from '../modal-login';
import Registration from '../modal-registration';

import "./Faq.css";
class Faq extends React.Component {

  render() {
    return (
        <div className="fon">
          <Navbar className='bar' expand="lg" fixed="top" variant="dark">
            <Navbar.Brand href="#home">HeroCoder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/fight">Fight</Nav.Link>
                <Nav.Link href="/skill">Skills</Nav.Link>
              </Nav>
              <Nav>
                <div className="registration">
               <Registration>
               </Registration>
                </div>
                <Modal> 
                </Modal>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="content-z">
            Welcom to the Hero Coder
          </div>
        </div>
    );
  }
}

export default Faq;