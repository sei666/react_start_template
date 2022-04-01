import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.scss';
import App from './App';
import { store } from './store/store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      {/* <React.StrictMode> */}
        <App/>
      {/* </React.StrictMode> */}
    </Router>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
