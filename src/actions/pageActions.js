export function btnCkicked(payload) {
    console.log("Action btn Clicked", payload);

    return {
        type: 'BUTTON_CLICKED',
        payload: payload
    };
}