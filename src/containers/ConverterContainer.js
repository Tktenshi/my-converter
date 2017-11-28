import Converter from '../components/Converter'
import {connect} from 'react-redux';
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
        // btnClicked: function () {
        //     console.log("Container dispatch btn clicked");
        //     dispatch(btnCkicked("lzlzlz"))
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);