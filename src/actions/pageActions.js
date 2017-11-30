import { createAction} from 'redux-actions'
import {CURRENCIES_RESPONSE, SOURCE_CURRENCY_CHANGED, TARGET_CURRENCY_CHANGED} from "../consts/actionTypeConsts";

// export function btnCkicked(pl) {
//     console.log("Action btn Clicked", pl);
//
//     return {
//         type: 'BUTTON_CLICKED',
//         payload: pl
//     };
// }

export function requestCurrencies(currency) {
    // console.log(currency);
    return function (dispatch) {
        fetch(`https://api.fixer.io/latest?base=${currency}`)
            .then(function (response) {
                // console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
                // console.log(response.status); // 200

                return response.json();
            })
            .then(function (data) {
                console.log(data);
                dispatch({
                    type: CURRENCIES_RESPONSE,
                    payload: data
                });
            })
            .catch(alert);
    }
}

export const sourceClick = createAction(SOURCE_CURRENCY_CHANGED);

export const targetClick = createAction(TARGET_CURRENCY_CHANGED);
