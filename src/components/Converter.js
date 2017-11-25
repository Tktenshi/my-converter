import React from 'react';
import Currency from "./Currency";
import {lang} from "../TemporaryDataBase";
import '../styles/converter.css';
import {Button} from "react-bootstrap";
import Lang from "../utils/Lang";

class Converter extends React.Component {
    render() {
        return (
            <div className="converter">
                <Currency title={Lang("I have")} value="1" unitVal={"1 RUB = 70 EUR"}/>
                <Button bsStyle="info" bsSize="large" className="converter-btn" onClick={this.props.btnClicked}>f</Button>
                <Currency title={Lang("I want to buy")} value="70000000000000000" unitVal={"1 EUR = X RUB"}/>
            </div>
        )
    }
}

export default Converter;