import Currency from '../components/Currency'
import {connect} from 'react-redux';
import {sourceClick, targetClick, requestCurrencies} from "../actions/pageActions"
// import {btnCkicked, requestCurrencies} from '../actions/pageActions';

const mapStateToProps = (state) => {
    return {
        defaultCurrencies: state.converter.defaultCurrencies,
        sourceCur: state.converter.sourceCur,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sourceClick: function (currencyName) {
            dispatch(sourceClick(currencyName))
        },
        targetClick: function (currencyName) {
            dispatch(targetClick(currencyName))
        },
        requestCurrencies: function (currencyName) {
            console.log("Container dispatch requestCurrencies");
            dispatch(requestCurrencies(currencyName))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency);