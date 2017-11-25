import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import "bootswatch/cerulean/bootstrap.css";
// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header";
import Converter from "./containers/ConverterContainer";
import About from "./components/About";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Converter}/>
                    <Route path="/about" component={About}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;