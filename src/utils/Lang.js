import {getItem} from "./LocalStorage";
import {defaultLang, langLS} from "../consts/settingsConsts";

export default function Lang(string, param) {
    const lang = getItem(langLS) || defaultLang;

    const data = {
        "I have": {ru: "У меня есть", en: "I have"},
        "I want to buy": {ru: "Хочу приобрести", en: "I want to buy"},
        "Currency converter": {ru: "Конвертер валют", en: "Currency converter"},
        "Converter": {ru: "Конвертер", en: "Converter"},
        "Settings": {ru: "Настройки", en: "Settings"},
        "History": {ru: "История", en: "History"},
        "About": {ru: "О программе", en: "About"},
        "Swap Currencies": {ru: "Поменять валюты местами", en: "Swap Currencies"},
        "lang": {ru: "Русский", en: "English"},
        "Developed by Tamara Konkova": {ru: "Сайт разрабатывала Конькова Тамара", en: "Developed by Tamara Konkova"},
        "About description": {
            ru: "Конвертер позволяет не только быстро и удобно перевести до " + param + " значений валют онлайн, вычислить валютные стоимости, " +
            "но и настроить быстрый доступ к часто используемым валютам по умолчанию, а так же посмотреть историю конвертаций!",
            en: "The converter allows you not only to quickly and conveniently translate up to " + param + " values of currencies online, calculate " +
            "currency values, but also configure quick access to frequently used currencies by default, and as well as look at the history of conversions!"
        },
        "No Information": {ru: "Нет данных", en: "No Information"},
    };

    return data[string][lang] || string;
}