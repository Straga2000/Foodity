import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import ListElement from "./Components/ListElement";

ReactDOM.render(
  <React.StrictMode>
    <ListElement />
  </React.StrictMode>,
  document.getElementById('root')
);