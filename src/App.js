import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import "bootswatch/cerulean/bootstrap.css";
import './styles/app.css';
import Header from "./components/Header";
import Converter from "./containers/ConverterContainer";
import About from "./components/About";
import Settings from "./components/Settings";
import {getItem} from "./utils/LocalStorage";
import {defaultLang, langLS} from "./consts/settingsConsts";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            lang: getItem(langLS) || defaultLang,
        }
    }

    changeLang = (lang) => {
        console.log("props", this.props);
        this.setState({lang});
    };

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header changeLang={this.changeLang}/>
                    <Route exact path="/" component={Converter}/>
                    <Route path="/about" component={About}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;