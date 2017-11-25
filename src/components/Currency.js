import React from 'react';
import CurrencyBtnGroup from "./CurrencyBtnGroup";
import {defaultCurrency} from "../TemporaryDataBase";
import {ControlLabel, InputGroup, FormControl} from "react-bootstrap";
import '../styles/currency.css';

// import Header from './Header';

class Currency extends React.Component {
    render() {
        return (
            <div className="currency">
                <ControlLabel>{this.props.title}</ControlLabel>
                <CurrencyBtnGroup symbols={defaultCurrency}/>
                <InputGroup bsSize="large" className="currency_input-cont">
                    <FormControl type="text" placeholder="" className="currency_input" value={this.props.value}/>
                </InputGroup>
                <FormControl.Static> {this.props.unitVal}</FormControl.Static>
            </div>
        )
    }
}

export default Currency;