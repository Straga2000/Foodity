import React, { Component } from 'react';

export default class Profile extends Component {
    state = {
        desc : this.props.desc
    }

    render() {

        const {desc} = this.state

        return (
            <div className="mb-3">
                <h5>About</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    {desc}
                </div>
            </div>
        )
    }
}