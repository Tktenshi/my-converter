import {allCurCodes} from "../utils/currenciesCodes";

export const unitV = 1;
export const initVal = 1;
export const roundUnitVal = 4;
export const accuracyOfCalc = 10000;
export const maxValLen = 9;
export const numDafaultCur = 4;
export const defaultCurrencies = allCurCodes(numDafaultCur); // ["RUB", "EUR", "USD", "GBP"];
export const numCharCur = defaultCurrencies[0].length;  //numberOfCharactersInCurrency
export const langs = [
    {id: "ru", name: "Русский", flag: "imgs/ru2.png"},
    {id: "en", name: "English", flag: "imgs/en2.png"},
];
export const defaultLang = langs[0].id;
export const langLS = "lang";  //"lang" - item in Local Storage
export const curLS = "quick-access-cur";  //"quick-access-cur" - item in Local Storage
