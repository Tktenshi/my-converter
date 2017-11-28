import React from 'react';
import Currency from "../containers/CurrencyContainer";
import '../styles/converter.css';
import {Button} from "react-bootstrap";
import Lang from "../utils/Lang";
import {initVal} from "../consts/consts";

class Converter extends React.Component {
    constructor() {
        super();
        this.state = {
            targetValue: " "
        };
    }

    componentWillReceiveProps(nextProp) {
        // if(nextProp.targetValue) setTargetValue();
    }

    setTargetValue = (sourceValue) => {
        // console.log(value);
        this.setState({targetValue: sourceValue * this.props.currencyData.rates[this.props.targetCur]});
    };

    render() {
        return (
            <div className="converter">
                <Currency title={Lang("I have")}
                          unitVal={`${initVal} ${this.props.sourceCur} = 70 ${this.props.targetCur}`}
                          activeBtn={this.props.sourceCur}
                          setTargetValue={this.setTargetValue}/>
                <Button bsStyle="info" bsSize="large" className="converter-btn">f</Button>
                <Currency title={Lang("I want to buy")}
                          unitVal={`${initVal} ${this.props.targetCur} = X ${this.props.sourceCur}`}
                          activeBtn={this.props.targetCur}
                          targetValue={this.state.targetValue || " "}/>
            </div>
        )
    }
}

export default Converter;