import {
    CHANGED_CURRENCY_DIRECTION, CURRENCIES_RESPONSE, SOURCE_CURRENCY_CHANGED,
    TARGET_CURRENCY_CHANGED
} from "../consts/actionTypeConsts";
import {curLS, defaultCurrencies} from "../consts/settingsConsts";
import {getItem} from "../utils/LocalStorage";

const initionalState = {
    currencyData: null,
    targetCur: defaultCurrencies[0],
    sourceCur: defaultCurrencies[1],
    quickAccessCur: getItem(curLS) || defaultCurrencies,
};

export function converterReducer(state = initionalState, action) {
    switch (action.type) {
        case CURRENCIES_RESPONSE:
            return {
                ...state,
                currencyData: action.payload
            };
        case SOURCE_CURRENCY_CHANGED:
            return {
                ...state,
                sourceCur: action.payload
            };
        case TARGET_CURRENCY_CHANGED:
            return {
                ...state,
                targetCur: action.payload
            };
        case CHANGED_CURRENCY_DIRECTION:
            return {
                ...state,
                targetCur: state.sourceCur,
                sourceCur : state.targetCur,
            };

        default:
            return state;
    }
}