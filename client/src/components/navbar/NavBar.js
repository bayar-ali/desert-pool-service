import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Nav, Image } from "react-bootstrap";
// import MenuItem from "react-bootstrap/MenuItem";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PoolServiceLogo from "../../assets/images/Swimming-pool-service-aqua-logo-580x348.jpg";

const NavbarRx = () => {
    return (
        <Navbar className="navBar-font" bg="light" expand="lg">
            <Navbar bg="dark">
                <Navbar.Brand href="/">
                    <Image
                        src={PoolServiceLogo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="Desert Pool Service"
                    />
                </Navbar.Brand>
            </Navbar>
            <Navbar.Brand href="#home">Desert Pool Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <NavDropdown title="Customers" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/customer">Customers</NavDropdown.Item>
                        <NavDropdown.Item href="/viewcustomer">View Customer</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarRx;