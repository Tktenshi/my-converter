import React from 'react';
import Currency from "../containers/CurrencyContainer";
import '../styles/converter.css';
import {Button, Glyphicon} from "react-bootstrap";
import Lang from "../utils/Lang";
import {accuracyOfCalc, roundUnitVal, unitV} from "../consts/consts";

class Converter extends React.Component {
    constructor() {
        super();
        this.state = {
            sourceValue: null,
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.currencyData !== nextProps.currencyData || this.props.targetCur !== nextProps.targetCur || nextState !== this.state;
    }

    setSourceValue = (sourceValue) => {
        this.setState({sourceValue});
    };

    getTargetValue = (coeff) => {
        if (this.props.currencyData && this.state.sourceValue && (coeff || coeff === 0)) {
            // return this.state.sourceValue * coeff;
            return Math.round(this.state.sourceValue * accuracyOfCalc * coeff.toFixed(roundUnitVal)) / accuracyOfCalc
        }
        else return " "
    };

    handlerClick = (evt) => {
        // [this.props.sourceCur, this.props.targetCur] = [this.props.targetCur, this.props.sourceCur];
        let a = 5;
        let b = 3;
        [a, b] = [b, a];
        console.log(a, b);
    };

    render() {
        console.log("Контейнер рендерится");
        const coeff = this.props.targetCur === this.props.sourceCur ? unitV : this.props.currencyData && this.props.currencyData.rates[this.props.targetCur];
        return (
            <div className="converter">
                <Currency title={Lang("I have")}
                          unitVal={coeff && `${unitV} ${this.props.sourceCur} = ${+coeff.toFixed(roundUnitVal)} ${this.props.targetCur}`}
                          activeBtn={this.props.sourceCur}
                          setSourceValue={this.setSourceValue}/>
                <Button bsStyle="info" bsSize="large" className="converter-btn" onClick={this.handlerClick}>
                    <Glyphicon glyph="transfer" className="converter-glyph"/>
                </Button>
                <Currency title={Lang("I want to buy")}
                          unitVal={coeff && `${unitV} ${this.props.targetCur} = ${+(unitV / coeff).toFixed(roundUnitVal)} ${this.props.sourceCur}`}
                          activeBtn={this.props.targetCur}
                          targetValue={this.getTargetValue(coeff)}/>
            </div>
        )
    }
}

export default Converter;