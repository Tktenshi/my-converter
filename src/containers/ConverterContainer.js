import Converter from '../components/Converter'
import {connect} from 'react-redux';
import {swapCurrenciesClick} from "../actions/pageActions";

const mapStateToProps = (state) => {
    return {
        currencyData: state.converterRed.currencyData,
        sourceCur: state.converterRed.sourceCur,
        targetCur: state.converterRed.targetCur,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        swapCurrenciesClick: function () {
            dispatch(swapCurrenciesClick())
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);