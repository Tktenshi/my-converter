import Converter from '../components/Converter'
import {connect} from 'react-redux';
import {btnCkicked} from '../actions/pageActions';

const mapStateToProps = (state) => {
    return {
        btnClick: state.btnClick
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        btnClicked: function () {
            console.log("Container dispatch btn clicked");
            dispatch(btnCkicked("lzlzlz"))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Converter);