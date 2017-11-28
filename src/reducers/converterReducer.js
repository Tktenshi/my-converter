import {CURRENCIES_RESPONSE, SOURCE_CURRENCY_CHANGED, TARGET_CURRENCY_CHANGED} from "../consts/actionTypeConsts";

const initionalState = {
    currencyData: null,
    sourceCur: "RUB",
    targetCur: "EUR",
    defaultCurrencies: ["RUB", "EUR", "USD", "GBP"]
};

export function converterReducer(state = initionalState, action) {
    // console.log(action);
    switch (action.type) {
        // case 'BUTTON_CLICKED':
        //     return {
        //         ...state,
        //         btnClick: action.payload
        //     };
        case CURRENCIES_RESPONSE:
            // console.log("!!", action.payload);
            return {
                ...state,
                currencyData: action.payload
            };
        case SOURCE_CURRENCY_CHANGED:
            // console.log(SOURCE_CURRENCY_CHANGED, action.payload);
            return {
                ...state,
                sourceCur: action.payload
            };
        case TARGET_CURRENCY_CHANGED:
            // console.log(TARGET_CURRENCY_CHANGED, action.payload);
            return {
                ...state,
                targetCur: action.payload
            };

        default:
            return state;
    }
}