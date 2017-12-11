import CurrencyBtnGroup from '../components/CurrencyBtnGroup'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        sourceCur: state.converterRed.sourceCur,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       /* sourceClick: function (currencyName) {
            dispatch(sourceClick(currencyName))
        },
        targetClick: function (currencyName) {
            dispatch(targetClick(currencyName))
        },
        requestCurrencies: function (currencyName) {
            // console.log("Container dispatch requestCurrencies");
            dispatch(requestCurrencies(currencyName))
        }*/
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBtnGroup);