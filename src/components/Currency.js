import React from 'react';
import CurrencyBtnGroup from "../containers/CurrencyBtnGroupContainer";
import {ControlLabel, InputGroup, FormControl} from "react-bootstrap";
import '../styles/currency.css';
import {initVal, maxValLen, numCharCur, roundUnitVal} from "../consts/settingsConsts";

class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.targetValue || initVal
        };
    }

    componentDidMount() {
        if (!this.props.targetValue) {
            this.props.requestCurrencies(this.props.sourceCur);
            this.props.setSourceValue(this.state.value);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!!nextProps.targetValue) {
            this.setState({value: nextProps.targetValue});
        } else if (nextProps.sourceCur !== this.props.sourceCur) {
            this.props.requestCurrencies(nextProps.sourceCur);
        }
    }

    handleChange = (evt) => {
        if (!this.props.targetValue) {
            const str = evt.target.value.replace(",", ".");
            const regexp = new RegExp(`^\\d{0,${maxValLen}}(?:\\d\\.\\d{0,${roundUnitVal}})?$`);
            if (regexp.test(str) && str.length <= maxValLen) {
                this.setState({value: str});
                this.props.setSourceValue(str);
                this.props.logging();
            }
        }
    };

    sourceClick = (evt) => {
        const tc = evt.currentTarget.textContent.substr(0, numCharCur);
        if (this.props.sourceCur !== tc) {
            this.props.sourceClick(tc);
            this.props.logging({sourseCur: tc});
        }
    };

    targetClick = (evt) => {
        const target = evt.currentTarget.textContent.substr(0, numCharCur);
        this.props.targetClick(target);
        this.props.logging({targetCur: target});
    };

    render() {
        return (
            <div className="currency">
                <ControlLabel>{this.props.title}</ControlLabel>
                <CurrencyBtnGroup activeBtn={this.props.activeBtn}
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