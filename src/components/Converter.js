import React from 'react';
import Currency from "../containers/CurrencyContainer";
import '../styles/converter.css';
import {Button, Glyphicon} from "react-bootstrap";
import Lang from "../utils/Lang";
// import LangErr from "../utils/LangErr";
import {accuracyOfCalc, roundUnitVal, unitV} from "../consts/settingsConsts";

class Converter extends React.Component {
    constructor() {
        super();
        this.state = {
            sourceValue: null,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(this.props.targetCur !== nextProps.targetCur && this.props.sourceCur !== nextProps.sourceCur)
    };

    setSourceValue = (sourceValue) => {
        this.setState({sourceValue});
    };

    getTargetValue = (coeff) => {
        if (this.props.currencyData && this.state.sourceValue && !isNaN(this.state.sourceValue) && (coeff || coeff === 0)) {
            // return this.state.sourceValue * coeff;
            return Math.round(this.state.sourceValue * accuracyOfCalc * coeff.toFixed(roundUnitVal)) / accuracyOfCalc
        }
        else return " "
    };

    swapCurrenciesClick = (evt) => {
        // [this.props.sourceCur, this.props.targetCur] = [this.props.targetCur, this.props.sourceCur];
        this.props.swapCurrenciesClick();
    };

    render() {
        console.log("Контейнер рендерится");
        const coeff = this.props.targetCur === this.props.sourceCur ? unitV : this.props.currencyData && this.props.currencyData.rates && this.props.currencyData.rates[this.props.targetCur];
        // console.log("coeff", coeff);
        // if (coeff === undefined) alert(`${LangErr("Other")} ${LangErr("Send")}`);
        return (
            <div className="converter">
                <Currency title={Lang("I have")}
                          unitVal={(coeff && `${unitV} ${this.props.sourceCur} = ${+coeff.toFixed(roundUnitVal)} ${this.props.targetCur}`) || Lang("No Information")}
                          activeBtn={this.props.sourceCur}
                          setSourceValue={this.setSourceValue}/>
                <Button bsStyle="info" title={Lang("Swap Currencies")} bsSize="large"
                        className="converter_btn-change-dir" onClick={this.swapCurrenciesClick}>
                    <Glyphicon glyph="transfer" className="converter_glyph"/>
                </Button>
                <Currency title={Lang("I want to buy")}
                          unitVal={(coeff && `${unitV} ${this.props.targetCur} = ${+(unitV / coeff).toFixed(roundUnitVal)} ${this.props.sourceCur}`) || Lang("No Information")}
                          activeBtn={this.props.targetCur}
                          targetValue={this.getTargetValue(coeff).toString()}/>
            </div>
        )
    }
}

export default Converter;