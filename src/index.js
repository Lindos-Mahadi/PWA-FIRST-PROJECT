import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';
import swDev from './swDev';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.Fragment>,
  document.getElementById('root')
);
// reportWebVitals();

swDev();
