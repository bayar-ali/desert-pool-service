import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PoolServiceLogo from "../../assets/images/Swimming-pool-service-aqua-logo-580x348.jpg";
import LoginButton from "../loginButton/loginButton";
import LogoutButton from "../logoutButton/logoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarRx = () => {
    const { isAuthenticated } = useAuth0();
    
    return (
        <Navbar className="navbar" responisve="true" expand="lg">
            <NavLink to="/"><Navbar.Brand><span className="navbar-title">
                <Image
                    src={PoolServiceLogo}
                    width="75px"
                    height="75px"
                    className="d-inline-block align-top"
                    alt="Desert Pool Service"
                /></span></Navbar.Brand></NavLink>
            <Navbar.Brand href="/" className="navBarTitle">Desert Pool Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                {isAuthenticated ? <NavDropdown className="navBar-font" title="Accounts" id="basic-nav-dropdown">
                        <NavDropdown.Item className="navBar-font" href="/customers">Customer</NavDropdown.Item>
                        <NavDropdown.Item className="navBar-font" href="/addcustomer">Add Customer</NavDropdown.Item>
                    </NavDropdown> : null}
                </Nav>
                {isAuthenticated ? <LogoutButton/>: <LoginButton/> }
            {/* //  <LoginButton /> 
            //  <LogoutButton />  */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarRx;