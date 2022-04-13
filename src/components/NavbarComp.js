import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class NavbarComp extends Component{
    render(){
        return (
            <div>
              <Navbar bg="light" expand="lg">
  
    <Navbar.Brand href="#home">SPORTSHOES.COM</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="justify-content-end">
      <NavDropdown title="Men" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Men Shoes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">More Shoes</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Women" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Women</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Women Shoes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">More Women Shoes</NavDropdown.Item>
          <NavDropdown.Divider />
         
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>  
             </div>
            
        )
    }



}
