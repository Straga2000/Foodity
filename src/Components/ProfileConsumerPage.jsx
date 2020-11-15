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
                            img = "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            name = "Bioferma"
                            location = "Teleorman, Rosiorii de Vede"
                        />
                        <div className="mb-3"></div>
                        <Description desc = "Bioferma @biofermalapuetere"/>
                        <div className="mb-3"></div>
                        <Gallery/>
                        <div className="mb-3"></div>
                        <List/>
                    </div>
                </div>
            </div>
        );
    }
}