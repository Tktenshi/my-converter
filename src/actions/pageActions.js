import {createAction} from 'redux-actions'
import {
    CHANGED_CURRENCY_DIRECTION, CURRENCIES_RESPONSE, SOURCE_CURRENCY_CHANGED,
    TARGET_CURRENCY_CHANGED
} from "../consts/actionTypeConsts";
import ApiError from "../utils/ApiExeption";
import LangErr from "../utils/LangErr";
import Alert from "../components/Alert";

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
                // window.a = response.json();
                if (response.status >= 300) throw new ApiError({status: response.status});
                return response.json();
            })
            .then(function (data) {
                console.log("ответ с сервера", data);
                if (data.error) throw new ApiError({errText: data.error});
                dispatch({
                    type: CURRENCIES_RESPONSE,
                    payload: data
                });
            })
            .catch(function (err) {
                if (err.name === "ApiError") {
                    const status = err.status;
                    const errText = err.errText;
                    status && console.log("err_status: ", status);
                    errText && console.log("err_text: ", errText);
                    if (status)
                        switch (true) {
                            case status >= 500:
                                alert(`${LangErr("Error")} ${status}! ${LangErr("500")}`);
                                break;
                            case status >= 400:
                                alert(`${LangErr("Error")} ${status}! ${LangErr("400")}`);
                                break;
                            default:
                                alert(`${LangErr("Error")} ${status}!`);
                        }
                } else {
                    console.log(`Error name: ${err.name}, error message: ${err.message}`);
                    alert(`${LangErr("Other")} ${LangErr("Send")}`);
                }
            });
    }
}

export const sourceClick = createAction(SOURCE_CURRENCY_CHANGED);

export const targetClick = createAction(TARGET_CURRENCY_CHANGED);

export const swapCurrenciesClick = createAction(CHANGED_CURRENCY_DIRECTION);
