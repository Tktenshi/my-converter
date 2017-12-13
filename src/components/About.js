import React from 'react';
import '../styles/about.css';
import {getLength} from "../utils/currenciesCodes";
import Lang from "../utils/Lang";

const About = () =>
    <div className="about">
        <h1 className="about_h1">{Lang("Currency converter")}</h1>
        <span className={"about_text"}>{Lang("About description", getLength())}</span>
        <span>{Lang("Developed by Tamara Konkova")}</span>
    </div>;

export default About