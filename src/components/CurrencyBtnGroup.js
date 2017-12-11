import React from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem} from "react-bootstrap";
import '../styles/currencyBtnGroup.css';
import allCur from "../utils/currenciesCodes";


class CurrencyBtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCurr: allCur()
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps!!!!!", nextProps);
        this.setState({allCur: allCur()});
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    {this.props.symbols.map((btn, i) => {
                        return (
                            <Button key={i} title={this.state.allCurr[btn]} onClick={this.props.btnClick}
                                    className="currency-btn"
                                    bsStyle="primary" active={this.props.activeBtn === btn}>{btn}</Button>
                        )
                    })}
                    <DropdownButton bsStyle="primary" className="currency-btn" title="" pullRight
                                    id="bg-nested-dropdown">
                        {Object.keys(this.state.allCurr).map((cur, i) => {
                            return (
                                <MenuItem key={i} onClick={this.props.btnClick} /*className="currency-btn"
                                        bsStyle="primary"*/
                                          active={this.props.activeBtn === cur}>{cur}: {this.state.allCurr[cur]}</MenuItem>
                            )
                        })}
                    </DropdownButton>
                </ButtonGroup>
            </div>
        )
    }
}

export default CurrencyBtnGroup;