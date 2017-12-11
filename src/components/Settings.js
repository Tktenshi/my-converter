import React from 'react';
import {FormGroup, Checkbox, FormControl} from "react-bootstrap";
import '../styles/settings.css';
import allCur from "../utils/currenciesCodes";
import Lang from "../utils/Lang";


class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            allCur: allCur()
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextPropsSettings", nextProps);
        this.setState({allCur: allCur()});
    }

    render() {
        console.log("Settings рендерится");
        return (
            <div className="settings">
                <h1>{Lang("Settings")}</h1>
                <FormControl.Static>dgleirjhjpeojhe difjgdlkfmgd drgjpsrojgpors rpgojsprgjpsor skjhgs
                    irgh</FormControl.Static>
                <FormGroup className="settings_currencies">
                    {Object.keys(this.state.allCur).map((cur, i) => {
                        return (
                            <Checkbox key={i} className="settings-currencies_checkbox"
                                /*onClick={this.props.btnClick} bsStyle="primary" active={this.props.activeBtn === cur}*/>{cur}: {this.state.allCur[cur]}</Checkbox>
                        )
                    })}
                </FormGroup>
            </div>
        )
    }
}

export default Settings;