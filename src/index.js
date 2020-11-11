import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/global.scss'
import './assets/css/app.scss'
import App from './App';
import './i18n';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="...">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
