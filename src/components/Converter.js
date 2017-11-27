import React from 'react';
import Currency from "../containers/CurrencyContainer";
import '../styles/converter.css';
import {Button} from "react-bootstrap";
import Lang from "../utils/Lang";

class Converter extends React.Component {
    constructor() {
        super();
        this.state = {
            targetValue: null
        };
    }

    onSourceCurrencyChanged = (value) => {
        console.log(value);
        this.setState({targetValue: value * this.props.currency.rates[this.props.targetCur]});
    };

    render() {
        return (
            <div className="converter">
                <Currency title={Lang("I have")} unitVal={`1 ${this.props.sourceCur} = 70 ${this.props.targetCur}`}
                          activeBtn={this.props.sourceCur}
                          onCurrencyChanged={this.onSourceCurrencyChanged}/>
                <Button bsStyle="info" bsSize="large" className="converter-btn">f</Button>
                <Currency title={Lang("I want to buy")}
                          unitVal={`1 ${this.props.targetCur} = X ${this.props.sourceCur}`}
                          activeBtn={this.props.targetCur} targetValue={this.state.targetValue}/>
            </div>
        )
    }
}

export default Converter;