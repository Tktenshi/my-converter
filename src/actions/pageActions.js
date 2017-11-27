export function btnCkicked(pl) {
    console.log("Action btn Clicked", pl);

    return {
        type: 'BUTTON_CLICKED',
        payload: pl
    };
}

export function requestCurrencies() {
    return function (dispatch) {
        fetch('https://api.fixer.io/latest')
            .then(function (response) {
                console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
                console.log(response.status); // 200

                return response.json();
            })
            .then(function (data) {
                console.log(data);
                dispatch({
                    type: 'CURRENCIES_RESPONSE',
                    payload: data
                });
            })
            .catch(alert);
    }
}