import React, { Component } from 'react';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import '../Styles/App.css';

import LoginPage from './LoginPage';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import ForgotPass from './ForgotPassPage';
import ProfileConsumerPage from './ProfileConsumerPage';
import ProfileSellerPage from './ProfileSellerPage';
///TODO Add links to pages with react link

export default class App extends Component {
    state = {}

    render() {
        return (

            <Router>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route path={"/login"} component={LoginPage}/>
                    <Route path={"/home"} component={HomePage}/>
                    <Route path={"/signup"} component={SignupPage}/>
                    <Route path={"/forgot"} component={ForgotPass}/>
                    <Route path={"/profileconsumer"} component={ProfileConsumerPage}/>
                    <Route path={"/profileseller"} component={ProfileSellerPage}/>
                </Switch>
            </Router>
        );
    }
}