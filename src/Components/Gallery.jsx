import React, { Component } from 'react';

export default class Profile extends Component {
    state = {
    }

    render() {
        return (
            <div className="py-4 px-4 ml-2">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Recent photos</h5>
                    <a href="#" className="btn btn-link text-muted">Show all</a>
                </div>
                <div className="row w-100 justify-content-between">
                    <div className="col-lg-3">
                        <img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/>
                    </div>
                    <div className="col-lg-3">
                        <img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/>
                    </div>
                    <div className="col-lg-3">
                        <img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid rounded shadow-sm"/>
                    </div>
                    <div className="col-lg-3">
                        <img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm"/>
                    </div>
                </div>
            </div>
        )
    }
}