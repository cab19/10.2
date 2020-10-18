import React from 'react';
import './NavTop.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

const NavTop = (props) => (
    <Navbar bg="info" expand="lg">
        <Navbar.Brand href="/" className="text-white">iCrowdTask</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavLink to="/task" className="nav-anchor">New Requester Task</NavLink>            
            <NavLink to="/worker" className="nav-anchor">Worker Task</NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavTop;