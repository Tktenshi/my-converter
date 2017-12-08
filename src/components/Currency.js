import React from 'react';
import CurrencyBtnGroup from "./CurrencyBtnGroup";
import {ControlLabel, InputGroup, FormControl} from "react-bootstrap";
import '../styles/currency.css';
import {initVal, maxValLen, roundUnitVal} from "../consts/settingsConsts";

class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.targetValue || initVal
        };
    }

    componentDidMount() {
        if (!this.props.targetValue) {
            console.log("отправляется запрос1");
            this.props.requestCurrencies(this.props.sourceCur);
            this.props.setSourceValue(this.state.value);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!!nextProps.targetValue) {
            this.setState({value: nextProps.targetValue});
        } else if (nextProps.sourceCur !== this.props.sourceCur) {
            console.log("отправляется запрос2");
            this.props.requestCurrencies(nextProps.sourceCur);
        }
    }

    handleChange = (evt) => {
        if (!this.props.targetValue) {
            const str = evt.target.value.replace(",", ".");
            const regexp = new RegExp(`^\\d{0,${maxValLen}}(?:\\.\\d{0,${roundUnitVal}})?$`);
            // if (str && /^\d{1,9}(?:\.\d{0,4})?$/.test(str) && str.length <= maxValLen)
            if (regexp.test(str) && str.length <= maxValLen) {
                this.setState({value: str});
                this.props.setSourceValue(str)
            }
        }
    };

    sourceClick = (evt) => {
        if (this.props.sourceCur !== evt.currentTarget.textContent) {
            this.props.sourceClick(evt.currentTarget.textContent);
            // this.props.requestCurrencies(evt.currentTarget.textContent);
        }
        // this.props.setSourceValue(this.state.value)
    };

    targetClick = (evt) => {
        this.props.targetClick(evt.currentTarget.textContent);
    };

    render() {
        return (
            <div className="currency">
                <ControlLabel>{this.props.title}</ControlLabel>
                <CurrencyBtnGroup symbols={this.props.defaultCurrencies} activeBtn={this.props.activeBtn}
                                  btnClick={this.props.targetValue ? this.targetClick : this.sourceClick}/>
                <InputGroup bsSize="large" className="currency_input-cont">
                    <FormControl type="text" placeholder="" className="currency_input" value={this.state.value}
                                 onChange={this.handleChange}/>
                </InputGroup>
                <FormControl.Static className="currency_unit-val"> {this.props.unitVal}</FormControl.Static>
            </div>
        )
    }
}

export default Currency;