import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import Modal from '../modal/Modal'
import Registration from '../modalRigestration'


import "./Faq.css";
class Faq extends React.Component {

  render() {
    return (
      <Router>
        <div className="fon">
          <Navbar className='bar' expand="lg" fixed="top" variant="dark">
            <Navbar.Brand href="#home">HeroCoder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {/* <Nav.Link href="/fight">Fight</Nav.Link>
                <Nav.Link href="/skill">Skills</Nav.Link> */}
              </Nav>
              <Nav>
                <div className="registration">

                  <Registration>
                    <p>
                      sd
                 </p>
                  </Registration>
                </div>

                <Modal>
                  <p>modalWindow</p>
                </Modal>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="content-z">
            <div className="main">
              <div className="zgl">
                <h1>Hero Coder</h1>
                <h2>Official site</h2>
              </div>
              <p className="txt">
                Hero Coder - this is a free MMORPG, which combines the opposition of
              the parties and the control of the world map.
                From early morning till late at night captures and defense of outposts, cities,
                castles, fortresses, battles for territories,
                  bosses, artifacts and many events. This is a world where magic and
                  steel triumph.
                </p>

            </div>

          </div>
        </div>
      </Router>
    );
  }
}

export default Faq;