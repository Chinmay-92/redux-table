import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './config/configureStore';

const rootElement = document.getElementById('root');

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
const MyContext = React.createContext();

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const renderApp = Component => {
    ReactDOM.render(
        <Provider store={store}>
                <Component />
        </Provider>,
        rootElement
    );
};

renderApp(App);

