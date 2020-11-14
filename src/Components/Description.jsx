import React, { Component } from 'react';

export default class Profile extends Component {
    state = {}

    render() {
        return (
            <div className="mb-3">
                <h5>About</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    Descriere clent sau ceva
                </div>
            </div>
        )
    }
}