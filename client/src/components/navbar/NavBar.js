import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Nav } from "react-bootstrap";
// import MenuItem from "react-bootstrap/MenuItem";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarRx = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar bg="dark">
                <Navbar.Brand href="/">
                    <img
                        src="../../Swimming-pool-service-aqua-logo-580x348.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Desert Pool Service"
                    />
                </Navbar.Brand>
            </Navbar>
            <Navbar.Brand href="#home">Desert Pool Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink to="/">Login</NavLink>
                    <NavDropdown title="Customers" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#/customers">Customers</NavDropdown.Item>
                        {/* <NavDropdown.Item href="/viewcustomer">View Customer</NavDropdown.Item> */}
                        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarRx;