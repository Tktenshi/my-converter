import Converter from '../components/Converter'
import {connect} from 'react-redux';
import {changeDirClick} from "../actions/pageActions";
// import {btnCkicked, requestCurrencies} from '../actions/pageActions';

const mapStateToProps = (state) => {
    return {
        // btnClick: state.btnClick,
        currencyData: state.converterRed.currencyData,
        sourceCur: state.converterRed.sourceCur,
        targetCur: state.converterRed.targetCur,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeDirClick: function () {
            dispatch(changeDirClick())
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);