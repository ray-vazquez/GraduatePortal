import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import accLogo from "../../images/albany-can-code-logo-white.png"
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect className="acc-navbar">
          <Navbar.Header className={`acc-header ${this.props.isAdmin ? "" : "non-admin"}`}>
            <Navbar.Brand className="acc-brand">
              <a href="https://albanycancode.org/">
                <img src={accLogo} alt={"acc logo"}/>
              </a>
            </Navbar.Brand>
            {/* Toggle button for mobile isn't necessary for non-admins. */}
            {this.props.isAdmin && <Navbar.Toggle />}
          </Navbar.Header>

          {/* Show extra features for admins. */}
          {this.props.isAdmin 
          ? <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/" href="/">
                <NavItem eventKey={1} className="acc-link">
                  SEARCH
                </NavItem>
              </LinkContainer>
              <NavItem eventKey={2} href="#" className="acc-link">
                CREATE PROFILE
              </NavItem>
              <NavItem 
                eventKey={3} 
                href="#" 
                className="acc-link"
                onClick={this.props.logout} >
                LOGOUT
              </NavItem>
            </Nav>
          </Navbar.Collapse>

          // Show less features for non-admins.
        : <Nav pullRight>
            <LinkContainer to="/" href="/">
              <NavItem eventKey={1} className="acc-link search-word">
                SEARCH
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/" href="/">
              <NavItem eventKey={1} className="acc-link search-icon">
                <i className="fa fa-search"></i>
              </NavItem>
            </LinkContainer>
          </Nav>}
        </Navbar>
      </div>
    );
  }
}

export default NavBar;