import { combineReducers } from 'redux';
import { converterReducer } from './converterReducer';

export default combineReducers({
    converterRed: converterReducer
});