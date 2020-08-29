import React from 'react';
import { Nav, Navbar,} from 'react-bootstrap';
// import styled from 'styled-components';

// const Styles = styled.div`
//     .navbar {
//         backgound
//     }

export const NavigationBar = () => (
    <Navbar className="navbar nav-fluid" expand="lg" >
        <Navbar.Brand className="navbar-brand col col-4" href="#">
            <img
                src="http://localhost:3003/img/images.png"
                width="60" height="60"
                alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navbar-nav">
                <Nav.Link className="nav-link active btn" href="/home">Home</Nav.Link>
                <Nav.Link className="nav-link" href="/apple">Apple HomeKit</Nav.Link>
                <Nav.Link className="nav-link" href="/amazon">Amazon Alexa</Nav.Link>
                <Nav.Link className="nav-link" href="/google">Google Nest</Nav.Link>
            </Nav>
            <div className="navbar-text ml-auto btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn sign ">
                    <input type="radio" name="Sign Up" id="joinButton" defaultChecked />{" "}
                        Sign Up
                    </label>
                <label className="btn btn-outline-secondary">
                    <input type="radio" name="Login" id="loginButton" /> Login
                </label>
            </div>
        </Navbar.Collapse>
    </Navbar>
)