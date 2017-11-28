import React from 'react';
import CurrencyBtnGroup from "./CurrencyBtnGroup";
import {ControlLabel, InputGroup, FormControl} from "react-bootstrap";
import '../styles/currency.css';
import {initVal} from "../consts/consts";

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
        }
    }

    handleChange = (evt) => {
        if (!this.props.targetValue) {
            this.setState({value: evt.target.value});
            this.props.setSourceValue(evt.target.value)
        }
    };

    sourceClick = (evt) => {
        // window.btn = evt.target.innerText;
        this.props.sourceClick(evt.currentTarget.textContent);
        this.props.requestCurrencies(evt.currentTarget.textContent);
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
                                  handleClick={this.props.targetValue ? this.targetClick : this.sourceClick}/>
                <InputGroup bsSize="large" className="currency_input-cont">
                    <FormControl type="text" placeholder="" className="currency_input" value={this.state.value}
                                 onChange={this.handleChange}/>
                </InputGroup>
                <FormControl.Static> {this.props.unitVal}</FormControl.Static>
            </div>
        )
    }
}

export default Currency;