import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
const Header = () => {

    // Creamos nuestro nav para usarlo en el Layout. Por ahora solo tiene un menu de navegacion,
    // pero podriamos crear tambien un banner con alguna imagen o presentacion, por ejemplo.

    return (
        <div className="App">
          <Navbar bg="dark" variant="dark"
            sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
              <img src="" width="40px" height="40px" />
              
            </Navbar.Brand>
    
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
              <Nav>
                <NavDropdown title="Products">
                  <NavDropdown.Item href="#products/tea">GPU</NavDropdown.Item>
                  <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
                  <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#about-us">About Us</Nav.Link>
                <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
    
          </Navbar>
          <div className="content">
            This is a content.
          </div>
        </div>
        )
}

export { Header }