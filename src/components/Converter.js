import React from 'react';
import Currency from "../containers/CurrencyContainer";
import '../styles/converter.css';
import {Button} from "react-bootstrap";
import Lang from "../utils/Lang";
import {unitV} from "../consts/consts";

class Converter extends React.Component {
    constructor() {
        super();
        this.state = {
            sourceValue: null,
        };
    }

    setSourceValue = (sourceValue) => {
        this.setState({sourceValue});
    };

    getTargetValue = (coeff) => {
        if (this.props.currencyData && this.state.sourceValue && (coeff || coeff === 0)) {
            return this.state.sourceValue * coeff;
        }
        else return " "
    };

    render() {
        const coeff = this.props.currencyData && this.props.currencyData.rates[this.props.targetCur];
        return (
            <div className="converter">
                <Currency title={Lang("I have")}
                          unitVal={coeff && `${unitV} ${this.props.sourceCur} = ${coeff} ${this.props.targetCur}`}
                          activeBtn={this.props.sourceCur}
                          setSourceValue={this.setSourceValue}/>
                <Button bsStyle="info" bsSize="large" className="converter-btn">f</Button>
                <Currency title={Lang("I want to buy")}
                          unitVal={coeff && `${unitV} ${this.props.targetCur} = ${1 / coeff} ${this.props.sourceCur}`}
                          activeBtn={this.props.targetCur}
                          targetValue={this.getTargetValue(coeff)}/>
            </div>
        )
    }
}

export default Converter;