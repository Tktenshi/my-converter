import React, {Component} from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

export default class Alert extends Component {
    alertOptions = {
        type: "danger",
        title: "",
    };

    hideAlert = () => {
        this.props.hideAlert();
    };

    render() {
        return (
            <div>
                <SweetAlert className="sweet-alert" show={!!this.props.textAlert} {...this.alertOptions}
                            onConfirm={this.hideAlert}> {this.props.textAlert}
                </SweetAlert>
            </div>
        )
    }
}