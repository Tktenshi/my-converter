import React from 'react';

function TemporaryDataBase() {
    const data = {
        lang: 0,  //0 - RUS, 1-ENG
        defaultCurrency: ["RUB", "USD", "EUR", "GBR"]
    };

    return data;
}

export const defaultCurrency = TemporaryDataBase().defaultCurrency;
export const lang = TemporaryDataBase().lang;
export default TemporaryDataBase;