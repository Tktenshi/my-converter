import React from 'react';
import {FormGroup, Checkbox, FormControl} from "react-bootstrap";
import '../styles/settings.css';
import getAllCur from "../utils/currenciesCodes";
import Lang from "../utils/Lang";
import {getItem} from "../utils/LocalStorage";
import {curLS, defaultCurrencies} from "../consts/settingsConsts";


class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            allCur: getAllCur(),
            currencies: getItem(curLS) || defaultCurrencies,
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextPropsSettings", nextProps);
        if (this.state.allCur !== getAllCur()) {
            console.log("попали");
            this.setState({allCur: getAllCur()});
        }
    }

    isDefault = (cur) => {
        return !!this.state.currencies.filter(function (name) {
            return name === cur;
        }).length > 0;
    };

    componentWillUnmount(){
        console.log("убивают!");
    }

    render() {
        console.log("Settings рендерится");
        console.log("this.currencies", this.state.currencies);
        return (
            <div className="settings">
                <h1 className="settings_h1">{Lang("Settings")}</h1>
                <FormControl.Static className="settings_text">Выберите 4 наиболее часто конвертирумые вами валюты,
                    которые будут отображаться в строке быстрого доступа конвертора</FormControl.Static>
                <FormGroup className="settings_currencies">
                    {Object.keys(this.state.allCur).map((cur, i) => {
                        return (
                            <Checkbox key={i} className="settings-currencies_checkbox" checked={this.isDefault(cur)}
                                /*onClick={this.props.btnClick} bsStyle="primary" active={this.props.activeBtn === cur}*/>{cur}: {this.state.allCur[cur]}</Checkbox>
                        )
                    })}
                </FormGroup>
            </div>
        )
    }
}

export default Settings;