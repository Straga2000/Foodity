import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import '../Styles/ProfileConsumerPage.css'

import Profile from './Profile';
import Description from './Description';
import  Gallery from './Gallery';

export default class ProfileConsumerPage extends Component {
    state = {}

    render() {
        return (
            <div className="w-100 h-100">
                <div className="mt-2">
                    <div className="bg-white">
                        <Profile/>
                        <Description/>
                        <Gallery/>
                    </div>
                </div>
            </div>
        );
    }
}