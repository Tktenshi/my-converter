import {getItem} from "./LocalStorage";
import {defaultLang} from "../consts/settingsConsts";

const data = {
    RUB: {ru: "Российский рубль", en: "Russian ruble",},
    EUR: {ru: "Евро", en: "Euro",},
    USD: {ru: "Доллар США", en: "United States dollar",},
    GBP: {ru: "Фунт стерлингов", en: "Pound sterling",},
    AUD: {ru: "Австралийский доллар", en: "Australian dollar",},
    AZN: {ru: "Азербайджанский манат", en: "Azerbaijan manat",},
    AMD: {ru: "Армянский драм", en: "Armenian dram",},
    BYN: {ru: "Белорусский рубль", en: "Belarusian ruble",},
    BGN: {ru: "Болгарский лев", en: "Bulgarian lev",},
    BRL: {ru: "Бразильский реал", en: "Brazilian real",},
    HUF: {ru: "Венгерский форинт", en: "Hungarian forint",},
    KRW: {ru: "Вон Республики Корея", en: "Korean Republic won",},
    DKK: {ru: "Датская крона", en: "Danish krone",},
    INR: {ru: "Индийская рупия", en: "Indian rupee",},
    KZT: {ru: "Казахстанский тенге", en: "Kazakhstani tenge",},
    CAD: {ru: "Канадский доллар", en: "Canadian dollar",},
    KGS: {ru: "Киргизский сом", en: "Kyrgyzstani som",},
    CNY: {ru: "Китайский юань", en: "Yuan renminbi",},
    MDL: {ru: "Молдавский лей", en: "Moldovan leu",},
    RON: {ru: "Новый румынский лей", en: "Romanian leu",},
    TMT: {ru: "Новый туркменский манат", en: "Turkmenistan new manat",},
    NOK: {ru: "Норвежская крона", en: "Norwegian krone",},
    PLN: {ru: "Польский злотый", en: "Polish zloty",},
    SGD: {ru: "Сингапурский доллар", en: "Singapore dollar",},
    TJS: {ru: "Таджикский сомони", en: "Tajikistani somoni",},
    TRY: {ru: "Турецкая лира", en: "Turkish lira",},
    UZS: {ru: "Узбекский сум", en: "Uzbekistan sum",},
    UAH: {ru: "Украинская гривна", en: "Ukrainian hryvnia",},
    CZK: {ru: "Чешская крона", en: "Czech koruna",},
    SEK: {ru: "Шведская крона", en: "Swedish krona",},
    CHF: {ru: "Швейцарский франк", en: "Swiss franc",},
    ZAR: {ru: "Южноафриканский рэнд", en: "South African rand",},
    JPY: {ru: "Японская иена", en: "Japanese yen",},
};

export default function allCur() {
    const lang = getItem("lang") || defaultLang;
    const allCur = {};
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            // allCur.push([key, data[key][lang]]);
            allCur[key] = data[key][lang];
        }
    }
    return allCur;
}

export function getLength(){
    return Object.keys(data).length;
}

export function CurTitle(cur) {
    const lang = getItem("lang") || defaultLang;
    return data[cur][lang] || cur;
}