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
                        <Profile/>
                        <Description/>
                        <Gallery/>
                        <List/>
                    </div>
                </div>
            </div>
        );
    }
}