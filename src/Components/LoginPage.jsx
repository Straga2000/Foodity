import React, { Component } from 'react';
import { Router, hashHistory} from 'react-router'

import Login from "./Login";

import '../Styles/LoginPage.css';

export default class LoginPage extends Component {
    state = {}

    render() {
        return (
            <div className="default">
                <Login/>
            </div>
        );
    }
}