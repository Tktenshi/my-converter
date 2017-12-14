import {curLS, defaultCurrencies, numDefaultCur} from "../consts/settingsConsts";
import {getItem} from "./LocalStorage";

export default function getQuickAccessCur() {
    const userCur = getItem(curLS);
    return userCur ? [...userCur, ...availability(userCur).slice(0, numDefaultCur - userCur.length)] : defaultCurrencies;
}

function availability(userCur) {
    return defaultCurrencies.filter((defEl) => {
        return !userCur.some(userEl => userEl === defEl)
    });
}