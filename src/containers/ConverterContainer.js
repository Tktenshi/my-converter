import Converter from '../components/Converter'
import {connect} from 'react-redux';
import {btnCkicked, requestCurrencies} from '../actions/pageActions';

const mapStateToProps = (state) => {
    return {
        btnClick: state.btnClick,
        currency: state.converter.currency
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        btnClicked: function () {
            console.log("Container dispatch btn clicked");
            dispatch(btnCkicked("lzlzlz"))
        },
        requestCurrencies: function () {
            console.log("Container dispatch requestCurrencies");
            dispatch(requestCurrencies(dispatch))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);