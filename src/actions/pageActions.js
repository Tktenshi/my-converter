import {createAction} from 'redux-actions'
import {
    CHANGED_CURRENCY_DIRECTION,
    CHANGED_QUICK_CURRENCY_LIST,
    CURRENCIES_RESPONSE,
    HIDED_ALERT,
    SHOW_ALERT,
    SOURCE_CURRENCY_CHANGED,
    TARGET_CURRENCY_CHANGED
} from "../consts/actionTypeConsts";
import ApiError from "../utils/ApiExeption";
import LangErr from "../utils/LangErr";

export function requestCurrencies(currency) {
    return function (dispatch) {
        fetch(`https://api.fixer.io/latest?base=${currency}`)
            .then(function (response) {
                if (response.status >= 300) throw new ApiError({status: response.status});
                return response.json();
            })
            .then(function (data) {
                dispatch({
                    type: CURRENCIES_RESPONSE,
                    payload: data
                });
                if (data.error) throw new ApiError({errText: data.error});
            })
            .catch(function (err) {
                dispatch({
                    type: CURRENCIES_RESPONSE,
                    payload: null
                });
                if (err.name === "ApiError") {
                    const status = err.status;
                    const errText = err.errText;
                    status && console.log("err_status: ", status);
                    errText && console.log("err_text: ", errText);
                    if (status)
                        switch (true) {
                            case status >= 500:
                                dispatch(showAlert(`${LangErr("Error")} ${status}! ${LangErr("500")}`));
                                break;
                            case status >= 400:
                                dispatch(showAlert(`${LangErr("Error")} ${status}! ${LangErr("400")}`));
                                break;
                            default:
                                dispatch(showAlert(`${LangErr("Error")} ${status}!`));
                        }
                } else {
                    console.log(`Error name: ${err.name}, error message: ${err.message}`);
                    dispatch(showAlert(`${LangErr("Other")} ${LangErr("Send")}`));
                }
            });
    }
}

// export function changeQuickAccessCur() {
//     console.log("changeQuickAccessCur");
//     const quickAccessCur = getQuickAccessCur();
//
//     return {
//         type: CHANGED_QUICK_CURRENCY_LIST,
//         payload: quickAccessCur
//     };
// }

export const sourceClick = createAction(SOURCE_CURRENCY_CHANGED);

export const targetClick = createAction(TARGET_CURRENCY_CHANGED);

export const swapCurrenciesClick = createAction(CHANGED_CURRENCY_DIRECTION);

export const changeQuickAccessCur = createAction(CHANGED_QUICK_CURRENCY_LIST);

export const hideAlert = createAction(HIDED_ALERT);

export const showAlert = createAction(SHOW_ALERT);
