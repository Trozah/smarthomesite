import React from 'react';
import { Nav, Navbar, NavbarBrand, Collapse, NavbarToggler, NavItem, NavLink,} from 'reactstrap';
import styled from 'styled-components';

// const Styles = styled.div`
//     .navbar {
//         backgound
//     }

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar className="navbar nav-fluid navbar-expand-lg"light expand="md">
        <NavbarBrand className="navbar-brand col col-4" href="#">
            <img src="../public/assets/img/images.png" width={60} height={60} />
        </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="navbar-nav"> 
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem className="navbar-nav">
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>



            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active btn" href="#">
                Home
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link btn" href="#">
                Apple HomeKit
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link btn" href="#">
                Amazon Alexa
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link btn" href="#">
                Google Nest
                </a>
            </li>
            </ul>
            {/* <span class="navbar-text ml-auto btn-group btn-group-toggle btn-outline-secondary">
                <a role="button" id="loginButton">Login</a>
            </span>
            <span class="navbar-text ml-auto btn btn-outline-info">
                <a role="button" id="loginButton">Sign Up</a>
            </span> */}
            <div
            className=" navbar-text  ml-auto btn-group btn-group-toggle "
            data-toggle="buttons"
            >
            <label className="btn sign ">
                <input type="radio" name="Sign Up" id="joinButton" defaultChecked />{" "}
                Sign Up
            </label>
            <label className="btn btn-outline-secondary">
                <input type="radio" name="Login" id="loginButton" /> Login
            </label>
            </div>
        </div>
        </Collapse>
        </Navbar>
    </div>

)