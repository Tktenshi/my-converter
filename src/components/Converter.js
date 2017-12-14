import React from 'react';
import Currency from "../containers/CurrencyContainer";
import '../styles/converter.css';
import {Button, Glyphicon} from "react-bootstrap";
import Lang from "../utils/Lang";
import {accuracyOfCalc, historyLS, roundUnitVal, unitV} from "../consts/settingsConsts";
import Alert from "../containers/AlertContainer";
import {getItem, setItem} from "../utils/LocalStorage";

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
            return Math.round(this.state.sourceValue * accuracyOfCalc * coeff.toFixed(roundUnitVal)) / accuracyOfCalc
        }
        else return " "
    };

    swapCurrenciesClick = (evt) => {
        this.props.swapCurrenciesClick();
        this.logging({sourseCur: this.props.targetCur, targetCur: this.props.sourceCur});
    };

    dataOptions = {
        year: '2-digit',
        month: '2-digit',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };

    logging = (data) => {
        console.log("logging", this.props.sourceCur, this.props.targetCur);
        console.log("logging2", data, new Date().toLocaleString("ru", this.dataOptions));
        const arrLS = getItem(historyLS) || [];
        arrLS.push({
            fromVal: 123456789,
            fromCur: (data && data.sourceCur) || this.props.sourceCur,
            toVal: 123456789123456789,
            toCur: (data && data.targetCur) || this.props.targetCur,
            date: new Date().toLocaleString("ru", this.dataOptions)
        });
        console.log(arrLS);
        setItem(historyLS, arrLS);
    };

    render() {
        const coeff = this.props.targetCur === this.props.sourceCur ? unitV : this.props.currencyData && this.props.currencyData.rates && this.props.currencyData.rates[this.props.targetCur];
        return (
            <div className="converter">
                <Alert/>
                <Currency title={Lang("I have")}
                          unitVal={(coeff && `${unitV} ${this.props.sourceCur} = ${+coeff.toFixed(roundUnitVal)} ${this.props.targetCur}`) || Lang("No Information")}
                          activeBtn={this.props.sourceCur}
                          setSourceValue={this.setSourceValue}
                          logging={this.logging}
                />
                <Button bsStyle="info" title={Lang("Swap Currencies")} bsSize="large"
                        className="converter_btn-change-dir" onClick={this.swapCurrenciesClick}>
                    <Glyphicon glyph="transfer" className="converter_glyph"/>
                </Button>
                <Currency title={Lang("I want to buy")}
                          unitVal={(coeff && `${unitV} ${this.props.targetCur} = ${+(unitV / coeff).toFixed(roundUnitVal)} ${this.props.sourceCur}`) || Lang("No Information")}
                          activeBtn={this.props.targetCur}
                          targetValue={this.getTargetValue(coeff).toString()}
                          logging={this.logging}
                />
            </div>
        )
    }
}

export default Converter;