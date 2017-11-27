import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {BrowserRouter, HashRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
