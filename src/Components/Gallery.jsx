import React, { Component } from 'react';

export default class Profile extends Component {
    state = {
    }

    render() {
        return (
            <div className="col-lg-12 p-0 m-0">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5>My products</h5>
                    <a href="#" className="btn btn-link text-muted">Show all</a>
                </div>
                <div className="mb-3 row">

                    <div className="col-lg-3">
                        <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80" alt="" className="img-fluid rounded"/>
                    </div>
                    <div className="col-lg-3">
                        <img src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" className="img-fluid rounded"/>
                    </div>
                    <div className="col-lg-3">
                        <img src="https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" className="img-fluid rounded"/>
                    </div>
                    <div className="col-lg-3">
                        <img src="https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1804&q=80" alt="" className="img-fluid rounded"/>
                    </div>
                </div>
            </div>
        )
    }
}