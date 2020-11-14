import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './Components/App'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);