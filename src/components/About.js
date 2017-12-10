import React from 'react';
import '../styles/about.css';
import {getLength} from "../utils/currenciesCodes";

const About = () =>
    <div className = "about">
        <h1 className = "about_h1">Конвертер валют</h1>
        <span className={"about_text"}>Конвертер позволяет не только быстро и удобно перевести до {getLength()} значений валют онлайн,
            вычислить валютные стоимости, но и настроить быстрый доступ к часто используемым валютам по умолчанию,
            а так же посмотреть историю конвертаций!</span>
        <span>Сайт разрабатывала Конькова Тамара</span>
    </div>;

export default About