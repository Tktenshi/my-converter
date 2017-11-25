const initionalState = {};

export function page(state = initionalState, action) {
    switch (action.type) {
        case 'BUTTON_CLICKED':
            return {
                ...state,
                btnClick: action.payload
            };

        default:
            return state;
    }
}