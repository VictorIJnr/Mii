import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from "react-router-dom";
import Mii from "./Routes/Mii";

ReactDOM.render(
    <BrowserRouter><Mii /></BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
