import Settings from '../components/Settings'
import {connect} from 'react-redux';
import {changeQuickAccessCur} from "../actions/pageActions";

const mapStateToProps = (state) => {
    return {
        // quickAccessCur: state.converterRed.quickAccessCur,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuickAccessCur: function (currencyList) {
            dispatch(changeQuickAccessCur(currencyList))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);