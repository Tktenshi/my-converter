import React from 'react';
import {Navbar, NavDropdown, NavItem, Nav, MenuItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import {Link} from 'react-router-dom'
import Lang from "../utils/Lang";
import '../styles/header.css';
import {defaultLang, langLS, langs} from "../consts/settingsConsts";
import {getItem, setItem} from "../utils/LocalStorage";

class Header extends React.Component {
    constructor() {
        super();
        this.curLangId = getItem(langLS) || defaultLang;
    }

    changeLangSelect = (key) => {
        if (langs[key].id !== this.curLangId) {
            setItem(langLS, langs[key].id);
            this.curLangId = langs[key].id;
            this.props.changeLang(langs[key].id);
        }
    };

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
                                <NavItem>{Lang("Converter")}</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/settings">
                                <NavItem>{Lang("Settings")}</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/history">
                                <NavItem>{Lang("History")}</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="/about">
                                <NavItem>{Lang("About")}</NavItem>
                            </LinkContainer>
                            <NavDropdown title={Lang("lang")} id="">
                                {langs.map((lang, i) => {
                                    return (
                                        <MenuItem key={i} eventKey={i} onSelect={this.changeLangSelect}
                                                  className={lang.id === (getItem(langLS) || defaultLang) && "active"}>
                                            <img className="header_menu-item-img" src={require(`../${lang.flag}`)}
                                                 alt={lang.id + ":"}/> {lang.name}
                                        </MenuItem>
                                    )
                                })}
                                {/*<MenuItem divider/>*/}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
