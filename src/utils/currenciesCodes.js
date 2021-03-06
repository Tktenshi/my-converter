import {getItem} from "./LocalStorage";
import {defaultLang, langLS} from "../consts/settingsConsts";

const data = {
    RUB: {ru: "Российский рубль", en: "Russian ruble",},
    EUR: {ru: "Евро", en: "Euro",},
    USD: {ru: "Доллар США", en: "United States dollar",},
    GBP: {ru: "Фунт стерлингов", en: "Pound sterling",},
    AUD: {ru: "Австралийский доллар", en: "Australian dollar",},
    BGN: {ru: "Болгарский лев", en: "Bulgarian lev",},
    BRL: {ru: "Бразильский реал", en: "Brazilian real",},
    CAD: {ru: "Канадский доллар", en: "Canadian dollar",},
    CHF: {ru: "Швейцарский франк", en: "Swiss franc",},
    CNY: {ru: "Китайский юань", en: "Chinese yuan renminbi",},
    CZK: {ru: "Чешская крона", en: "Czech koruna",},
    DKK: {ru: "Датская крона", en: "Danish krone",},
    HKD: {ru: "Гонконгский доллар", en: "Hong Kong dollar",},
    HRK: {ru: "Хорватская куна", en: "Croatian kuna",},
    HUF: {ru: "Венгерский форинт", en: "Hungarian forint",},
    IDR: {ru: "Индонезийская рупия", en: "Indonesian rupiah",},
    ILS: {ru: "Новый израильский шекель", en: "Israeli shekel",},
    INR: {ru: "Индийская рупия", en: "Indian rupee",},
    JPY: {ru: "Японская иена", en: "Japanese yen",},
    KRW: {ru: "Вон Республики Корея", en: "South Korean won",},
    MXN: {ru: "Мексиканское песо", en: "Mexican peso",},
    MYR: {ru: "Малайзийский ринггит", en: "Malaysian ringgit",},
    NOK: {ru: "Норвежская крона", en: "Norwegian krone",},
    NZD: {ru: "Новозеландский доллар", en: "New Zealand dollar",},
    PHP: {ru: "Филиппинское песо", en: "Philippine piso",},
    PLN: {ru: "Польский злотый", en: "Polish zloty",},
    RON: {ru: "Новый румынский лей", en: "Romanian leu",},
    SEK: {ru: "Шведская крона", en: "Swedish krona",},
    SGD: {ru: "Сингапурский доллар", en: "Singapore dollar",},
    THB: {ru: "Тайский бат", en: "Thai baht",},
    TRY: {ru: "Турецкая лира", en: "Turkish lira",},
    ZAR: {ru: "Южноафриканский рэнд", en: "South African rand",},
};

export default function getAllCur() {
    const lang = getItem(langLS) || defaultLang;
    const allCur = {};
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            allCur[key] = data[key][lang];
        }
    }
    return allCur;
}

export function allCurCodes(num = getLength()) {
    return Object.keys(data).filter((key, i) => i < num)
}

export function getLength() {
    return Object.keys(data).length;
}

export function CurTitle(cur) {
    const lang = getItem(langLS) || defaultLang;
    return data[cur][lang] || cur;
}