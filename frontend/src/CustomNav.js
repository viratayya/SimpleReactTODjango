import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import {Route, Link } from "react-router-dom";
import CustomMain from './CustomMain';
import CustomDetails from './CustomDetails';
import CustomLogin from './CustomLogin';


function CustomNav(props) {
  
  return (
    <div className="App">
      <Navbar collapseOnSelect expand='md' sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="/">Brand_Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            {/* {props.cnv.map((value, index) => {
              return <Nav.Link href="{value['link']}">{value['name']}</Nav.Link>
            })} */}
              
              
              <NavLink className="nav-link" to="/employee/">Employee</NavLink>
              <NavLink className="nav-link" to="/details/">Details</NavLink>
              {/* <NavLink className="nav-link" to="/login/">Login</NavLink> */}
              <Nav.Link className="nav-link" href="/login.html">Login</Nav.Link>
              
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Button variant="outline-danger" href="/login.html" >LogOut</Button>
          </Navbar.Collapse>
        
        
      </Navbar> 
      <Route path="/"/>
      <Route path="/employee/" exact component={CustomMain} />
      <Route path="/details/" exact component={CustomDetails} />
      <Route path="/login/" exact component={CustomLogin} />
    </div>
    
  );
}

export default CustomNav;
