import {getItem} from "./LocalStorage";

export default function Lang(string) {
    const lang = getItem("lang") || "ru";

    const data = {
        "I have": {ru: "У меня есть", en: "I have"},
        "I want to buy": {ru: "Хочу приобрести", en: "I want to buy"}
    };

    return data[string][lang];
}