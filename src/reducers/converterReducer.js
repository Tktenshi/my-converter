const initionalState = {currency: null, sourceCur: null, targetCur: null};

export function converterReducer(state = initionalState, action) {
    console.log(action);
    switch (action.type) {
        case 'BUTTON_CLICKED':
            return {
                ...state,
                btnClick: action.payload
            };
        case 'CURRENCIES_RESPONSE':
            console.log("!!", action.payload);
            return {
                ...state,
                currency: action.payload
            };

        default:
            return state;
    }
}