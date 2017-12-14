import {
    CHANGED_CURRENCY_DIRECTION,
    CHANGED_QUICK_CURRENCY_LIST,
    CURRENCIES_RESPONSE,
    HIDED_ALERT,
    SHOW_ALERT,
    SOURCE_CURRENCY_CHANGED,
    TARGET_CURRENCY_CHANGED
} from "../consts/actionTypeConsts";
import getQuickAccessCur from "../utils/SetQuickAccessCur";
import {langLS, defaultLang} from "../consts/settingsConsts";
import {getItem} from "../utils/LocalStorage";

const quickAccessCur = getQuickAccessCur();

const initionalState = {
    currencyData: null,
    quickAccessCur: quickAccessCur,
    targetCur: quickAccessCur[0],
    sourceCur: quickAccessCur[1],
    textAlert: null,
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
                sourceCur: state.targetCur,
            };
        case CHANGED_QUICK_CURRENCY_LIST:
            return {
                ...state,
                quickAccessCur: action.payload,
                targetCur: action.payload[0],
                sourceCur: action.payload[1],
            };
        case HIDED_ALERT:
            return {
                ...state,
                textAlert: null
            };
        case SHOW_ALERT:
            return {
                ...state,
                textAlert: action.payload
            };

        default:
            return state;
    }
}