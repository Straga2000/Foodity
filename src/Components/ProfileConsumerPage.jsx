import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import '../Styles/ProfileConsumerPage.css'

import Profile from './Profile';
import Description from './Description';
import Gallery from './Gallery';
import List from './List';

export default class ProfileConsumerPage extends Component {
    state = {}

    render() {
        return (
            <div className="w-100 h-100">
                <div className="d-flex justify-content-center w-100">
                    <div className="bg-white col-lg-11">
                        <nav className="navbar navbar-light bg-light mb-3">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                    </button>
                            </form>
                        </nav>
                        <Profile
                            img = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fil3.picdn.net%2Fshutterstock%2Fvideos%2F12665702%2Fthumb%2F1.jpg%3Fi10c%3Dimg.resize(height%3A160)&f=1&nofb=1"
                            name = "Andrei Stefan"
                            cat1 = "Budget"
                            cat2 = "Followers"
                            cat3 = "Watchlist"
                        />
                        <div className="mb-3"></div>
                        <Description desc = "Imi place sa gandesc si sa mananc sanatos."/>
                        <div className="mb-3"></div>
                        {/*<Gallery/>*/}
                        <div className="mb-3"></div>
                        <List/>
                    </div>
                </div>
            </div>
        );
    }
}