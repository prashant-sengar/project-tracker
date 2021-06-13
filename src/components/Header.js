import React from 'react';
import * as ReactNavBar from 'react-bootstrap';
import logo from './shell.png';
import {SearchIcon} from '@material-ui/icons/Search';
import search from './search.png';
import about from './about.png';
import add from './add.png';
export default function Header() {
    return (
        <div className="Header">
            <ReactNavBar.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <ReactNavBar.Container>
            <ReactNavBar.Navbar.Brand href="/">
            <img 
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Shell logo"
                /></ReactNavBar.Navbar.Brand>
                 
            <ReactNavBar.Navbar.Brand href="/">Vcores Tracker</ReactNavBar.Navbar.Brand>
            <ReactNavBar.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactNavBar.Navbar.Collapse id="responsive-navbar-nav">
            <ReactNavBar.Nav className="me-auto">
            <ReactNavBar.NavLink href="/add">New Project</ReactNavBar.NavLink>
            <img 
              src={add}
              width="20"
              height="20"
              className="d-inline-block align-top"
              alt="Add Icon"
              style={{marginTop:"3%"}}
                />
            <ReactNavBar.NavLink href="/project">Track Projects</ReactNavBar.NavLink>
            <img 
              src={search}
              width="20"
              height="20"
              className="d-inline-block align-top"
              alt="Search Icon"
              style={{marginTop:"3%"}}
                />
            <ReactNavBar.NavLink href="/about">About
            
            </ReactNavBar.NavLink>
            <img 
              src={about}
              style={{marginTop:"3%"}}
              width="20"
              height="20"
              className="d-inline-block align-top"
              alt="About Icon"
                />
            </ReactNavBar.Nav>
          </ReactNavBar.Navbar.Collapse>
          </ReactNavBar.Container>
          </ReactNavBar.Navbar>
        </div>
    );
}
