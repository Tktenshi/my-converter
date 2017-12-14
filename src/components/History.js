import React from 'react';
import Lang from "../utils/Lang";
import {Table} from "react-bootstrap";
import '../styles/history.css';
import {historyLS} from "../consts/settingsConsts";
import {getItem, setItem} from "../utils/LocalStorage";


class History extends React.Component {
    constructor() {
        super();
        // const a = [{fromVal: 123456789, fromCur: "EUR", toVal: 123456789123456789, toCur: "RUB", date: "01.12.15"},
        //     {fromVal: 123456789, fromCur: "EUR", toVal: 123456789123456789, toCur: "RUB", date: "01.12.15"},
        //     {fromVal: 123456789, fromCur: "EUR", toVal: 123456789123456789, toCur: "RUB", date: "01.12.15"},
        //     {fromVal: 123456789, fromCur: "EUR", toVal: 123456789123456789, toCur: "RUB", date: "01.12.15"},
        //     {fromVal: 123456789, fromCur: "EUR", toVal: 123456789123456789, toCur: "RUB", date: "01.12.15"},
        // ];
        // setItem(historyLS, a);
        this.hist = getItem(historyLS) || [];
        console.log(this.hist);
    }

    render() {
        return (
            <div className="history">
                <h1 className="history_h1">{Lang("History")}</h1>
                <Table bordered condensed className="history_table">
                    <thead>
                    <tr className="history_table-head">
                        <th>№</th>
                        <th colSpan="2">{Lang("From")}</th>
                        <th colSpan="2">{Lang("To")}</th>
                        <th>{Lang("Date")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.hist.map((row, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td className="history_table-td-value">{row.fromVal}</td>
                                <td>{row.fromCur}</td>
                                <td className="history_table-td-value">{row.toVal}</td>
                                <td>{row.toCur}</td>
                                <td>{row.date}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default History;