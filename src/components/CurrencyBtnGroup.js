import React from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem} from "react-bootstrap";
import '../styles/currencyBtnGroup.css';
import getAllCur from "../utils/currenciesCodes";


class CurrencyBtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCur: getAllCur()
        };
    }

    componentWillReceiveProps(nextProps) {
        // console.log("nextProps!!!!!", nextProps);
        // console.log("getAllCur()!!!!!", getAllCur());
        this.setState({allCur: getAllCur()});
        // console.log("this.state.allCurr!!!!!", this.state.allCurr);
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    {this.props.quickAccessCur.map((btn, i) => {
                        return (
                            <Button key={i} title={this.state.allCur[btn]} onClick={this.props.btnClick}
                                    className="currency-btn"
                                    bsStyle="primary" active={this.props.activeBtn === btn}>{btn}</Button>
                        )
                    })}
                    <DropdownButton bsStyle="primary" className="currency-btn" title="" pullRight
                                    id="bg-nested-dropdown">
                        {Object.keys(this.state.allCur).map((cur, i) => {
                            return (
                                <MenuItem key={i} onClick={this.props.btnClick} /*className="currency-btn"
                                        bsStyle="primary"*/
                                          active={this.props.activeBtn === cur}>{cur}: {this.state.allCur[cur]}</MenuItem>
                            )
                        })}
                    </DropdownButton>
                </ButtonGroup>
            </div>
        )
    }
}

export default CurrencyBtnGroup;