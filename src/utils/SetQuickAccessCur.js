import {curLS, defaultCurrencies, numDafaultCur} from "../consts/settingsConsts";
import {getItem} from "./LocalStorage";

export default function getQuickAccessCur() {
    const userCur = getItem(curLS);
    return userCur ? [...userCur, ...availability(userCur).slice(0, numDafaultCur - userCur.length)] : defaultCurrencies;
    // const quickAccessCur = userCur ? [...userCur, ...availability(userCur).slice(0, 4 - userCur.length)] : defaultCurrencies;
    // [].concat(!!getItem(curLS) && getItem(curLS), defaultCurrencies); //[...getItem(curLS) , ...defaultCurrencies];
    // console.log("quickAccessCur", quickAccessCur);
    // return ["GBR", "MYR", "RUB", "PHP"];
}

function availability(userCur) {
    return defaultCurrencies.filter((defEl) => {
        return !userCur.some(userEl => userEl === defEl)
    });
}