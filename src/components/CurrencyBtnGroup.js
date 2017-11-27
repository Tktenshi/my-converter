import React from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem} from "react-bootstrap";
import '../styles/currencyBtnGroup.css';

class CurrencyBtnGroup extends React.Component {
    render() {
        return (
            <div>
                <ButtonGroup>
                    {this.props.symbols.map((btn, i) => {
                        return (
                            <Button key={i} onClick={this.props.handleClick} className="currency-btn"
                                    bsStyle="primary" active={this.props.activeBtn === btn}>{btn}</Button>
                        )
                    })}
                    <DropdownButton bsStyle="primary" className="currency-btn" title="" id="bg-nested-dropdown">
                        <MenuItem eventKey="1">Dropdown link 1</MenuItem>
                        <MenuItem eventKey="2">Dropdown link 2</MenuItem>
                    </DropdownButton>
                </ButtonGroup>
            </div>
        )
    }
}

export default CurrencyBtnGroup;