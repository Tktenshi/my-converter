import {getItem} from "./LocalStorage";
import {defaultLang, langLS} from "../consts/settingsConsts";

export default function Lang(string) {
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
    };

    return data[string][lang] || string;
}