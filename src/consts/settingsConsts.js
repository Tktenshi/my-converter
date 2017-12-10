import {allCurCodes} from "../utils/currenciesCodes";

export const unitV = 1;
export const initVal = 1;
export const roundUnitVal = 4;
export const accuracyOfCalc = 10000;
export const maxValLen = 9;
export const numDafaultCur = 4;
export const defaultLang = "ru";
export const defaultCurrencies = allCurCodes(numDafaultCur);
// export const defaultCurrencies = ["RUB", "EUR", "USD", "GBP"];
export const numCharCur = defaultCurrencies[0].length;  //numberOfCharactersInCurrency
