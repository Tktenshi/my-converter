import CurrencyBtnGroup from '../components/CurrencyBtnGroup'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        sourceCur: state.converterRed.sourceCur,
        quickAccessCur: state.converterRed.quickAccessCur,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // sourceClick: function (currencyName) {
        //     dispatch(sourceClick(currencyName))
        // },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBtnGroup);