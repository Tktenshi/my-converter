import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import "bootswatch/cerulean/bootstrap.css";
import Header from "./components/Header";
import Converter from "./containers/ConverterContainer";
import About from "./components/About";
import './styles/app.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header/>
                    <Route exact path="/" component={Converter}/>
                    <Route path="/about" component={About}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;