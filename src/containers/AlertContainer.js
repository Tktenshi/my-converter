import Alert from '../components/Alert'
import {connect} from 'react-redux';
import {hideAlert} from "../actions/pageActions";

const mapStateToProps = (state) => {
    return {
        textAlert: state.converterRed.textAlert,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideAlert: function () {
            dispatch(hideAlert())
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);