import React from 'react';
import {Navbar, NavDropdown, NavItem, Nav, MenuItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import {Link} from 'react-router-dom'
import Lang from "../utils/Lang";
import '../styles/header.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar className="header" inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">{Lang("Currency converter")}</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer exact to="/">
                                <NavItem eventKey={1}>{Lang("Converter")}</NavItem>
                            </LinkContainer>
                            <NavItem eventKey={2} href="#">{Lang("Settings")}</NavItem>
                            <NavDropdown eventKey={3} title={Lang("History")} id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Очистить историю</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="/about">
                                <NavItem eventKey={1}>{Lang("About")}</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
