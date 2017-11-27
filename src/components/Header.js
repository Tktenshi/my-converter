import React from 'react';
import {Navbar, NavDropdown, NavItem, Nav, MenuItem, FormGroup, ControlLabel, FormControl, option} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Конвертер валют</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer exact to="/">
                                <NavItem eventKey={1}>Конвертер</NavItem>
                            </LinkContainer>
                            <NavItem eventKey={2} href="#">Настройки</NavItem>
                            <NavDropdown eventKey={3} title="История" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Очистить историю</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="/about">
                                <NavItem eventKey={1}>О программе</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
