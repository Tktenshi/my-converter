import React from 'react';
import {FormGroup, Checkbox, FormControl} from "react-bootstrap";
import '../styles/settings.css';
import getAllCur from "../utils/currenciesCodes";
import Lang from "../utils/Lang";
import {getItem, removeItem, setItem} from "../utils/LocalStorage";
import {curLS, defaultCurrencies, numDefaultCur} from "../consts/settingsConsts";
import SetQuickAccessCur from "../utils/SetQuickAccessCur";


class Settings extends React.Component {
    constructor() {
        super();
        const currencies = getItem(curLS) || defaultCurrencies;
        this.state = {
            allCur: getAllCur(),
            numOfCur: currencies.length,
        };
        this.state.checkedList = this.isDefault(currencies);
    }

    isDefault = (currencies) => {
        const obj = {};
        Object.keys(this.state.allCur).forEach((cur, i) => {
            obj[cur] = !!currencies.some(function (name) {
                return name === cur;
            })
        });
        return obj;
    };

    componentWillReceiveProps(nextProps) {
        if (this.state.allCur !== getAllCur()) {
            this.setState({allCur: getAllCur()});
        }
    }

    handleInputChange = (evt) => {
        const el = evt.target;

        this.setState({
            checkedList: {...this.state.checkedList, [el.name]: el.checked},
            numOfCur: this.state.numOfCur + ((el.checked && 1) || -1)
        });
    };

    componentWillUnmount() {
        const quickAccessCur = Object.keys(this.state.checkedList).filter((key, i) => {
            return this.state.checkedList[key];
        });
        if (quickAccessCur.length === 0)
            removeItem(curLS);
        else setItem(curLS, quickAccessCur);

        this.props.changeQuickAccessCur(SetQuickAccessCur())
    }

    render() {
        const isDis = this.state.numOfCur === numDefaultCur;
        return (
            <div className="settings">
                <h1 className="settings_h1">{Lang("Settings")}</h1>
                <FormControl.Static
                    className="settings_text">{Lang("Settings description", numDefaultCur)}</FormControl.Static>
                <FormGroup className="settings_currencies">
                    {Object.keys(this.state.allCur).map((cur, i) => {
                        const checked = this.state.checkedList[cur];
                        return (
                            <Checkbox key={i} value={i} name={cur} className="settings-currencies_checkbox"
                                      checked={checked} disabled={isDis && !checked}
                                      onChange={this.handleInputChange}>{cur}: {this.state.allCur[cur]}</Checkbox>
                        )
                    })}
                </FormGroup>
            </div>
        )
    }
}

export default Settings;