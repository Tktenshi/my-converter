import Settings from '../components/Settings'
import {connect} from 'react-redux';
import {changeQuickAccessCur} from "../actions/pageActions";

const mapStateToProps = (state) => {
    return {
        // quickAccessCur: state.converterRed.quickAccessCur,
        // sourceCur: state.converterRed.sourceCur,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuickAccessCur: function (currencyList) {
            dispatch(changeQuickAccessCur(currencyList))
        },
        // sourceClick: function (currencyName) {
        //     dispatch(sourceClick(currencyName))
        // },
        // targetClick: function (currencyName) {
        //     dispatch(targetClick(currencyName))
        // },
        // requestCurrencies: function (currencyName) {
        //     // console.log("Container dispatch requestCurrencies");
        //     dispatch(requestCurrencies(currencyName))
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);