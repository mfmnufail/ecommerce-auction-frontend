import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './Store'
import {Auth0Provider} from '@auth0/auth0-react'
import {DOMAIN, CLIENTID} from './Utils/constants'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENTID}
      redirectUri= {window.location.origin}
    >
    <Provider store={store}>
    <App />
    </Provider>

    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
