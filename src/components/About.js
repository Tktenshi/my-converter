import React from 'react';
import '../styles/about.css';
import {getLength} from "../utils/currenciesCodes";
import Lang from "../utils/Lang";

const About = () =>
    <div className = "about">
        <h1 className = "about_h1">{Lang("Currency converter")}</h1>
        <span className={"about_text"}>Конвертер позволяет не только быстро и удобно перевести до {getLength()} значений валют онлайн,
            вычислить валютные стоимости, но и настроить быстрый доступ к часто используемым валютам по умолчанию,
            а так же посмотреть историю конвертаций!</span>
        <span>{Lang("Developed by Tamara Konkova")}</span>
    </div>;

export default About