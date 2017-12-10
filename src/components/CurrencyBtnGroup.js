import React from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem} from "react-bootstrap";
import '../styles/currencyBtnGroup.css';
import allCur from "../utils/currenciesCodes";

class CurrencyBtnGroup extends React.Component {
    constructor() {
        super();
        this.state = {
            allCur: allCur(),
        };
        // console.log("!!!!!ВЫПОЛНИЛСЯ!!!!");
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    {this.props.symbols.map((btn, i) => {
                        return (
                            <Button key={i} title={this.state.allCur[btn]} onClick={this.props.btnClick}
                                    className="currency-btn"
                                    bsStyle="primary" active={this.props.activeBtn === btn}>{btn}</Button>
                        )
                    })}
                    <DropdownButton bsStyle="primary" className="currency-btn" title="" pullRight
                                    id="bg-nested-dropdown">
                        {Object.keys(this.state.allCur).map((cur, i) => {
                            return (
                                <MenuItem key={i} onClick={this.props.btnClick} /*className="currency-btn"
                                        bsStyle="primary"*/ active={this.props.activeBtn === cur}>{cur}: {this.state.allCur[cur]}</MenuItem>
                            )
                        })}
                        {/*{console.log("СЧИТАЛСЯ", this.state.allCur)}*/}
                        {/*<MenuItem eventKey="1">Dropdown link 1</MenuItem>*/}
                        {/*<MenuItem eventKey="2">Dropdown link 2</MenuItem>*/}
                    </DropdownButton>
                </ButtonGroup>
            </div>
        )
    }
}

export default CurrencyBtnGroup;