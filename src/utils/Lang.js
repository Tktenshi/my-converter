import {getItem} from "./LocalStorage";
import {defaultLang} from "../consts/settingsConsts";

export default function Lang(string) {
    const lang = getItem("lang") || defaultLang;

    const data = {
        "I have": {ru: "У меня есть", en: "I have"},
        "I want to buy": {ru: "Хочу приобрести", en: "I want to buy"},
        "Currency converter": {ru: "Конвертер валют", en: "Currency converter"},
        "Converter": {ru: "Конвертер", en: "Converter"},
        "Settings": {ru: "Настройки", en: "Settings"},
        "History": {ru: "История", en: "History"},
        "About": {ru: "О программе", en: "About"},
        "Swap Currencies": {ru: "Поменять валюты местами", en: "Swap Currencies"},
    };

    return data[string][lang] || string;
}