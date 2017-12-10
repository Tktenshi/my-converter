import {getItem} from "./LocalStorage";
import {defaultLang} from "../consts/settingsConsts";

export default function Lang(string) {
    const lang = getItem("lang") || defaultLang;

    const data = {
        "500": {ru: "Извините, на сервере ведутся временные работы, попробуйте зайти через несколько минут.", en: "Sorry, the server is under temporary work, so try again in a few minutes."},
        "400": {ru: "Извините, ресурс не найден!", en: "Sorry, resource not found!"},
        "Error": {ru: "Ошибка", en: "Error"},
        "Other": {ru: "Что-то пошло не так! Разработчики уже работают над этим. Приносим извинения за временные неудобства.", en: "Sorry, something went wrong. We're working to fix it as soon as we can."},
        "Send": {ru: "Если ошибка повторяется, пожалуйста опишите суть проблемы на tktenshi@mail.ru", en: "If the error repeats, please describe the problem at tktenshi@mail.ru"},
    };

    return data[string] ? data[string][lang] : string;
}