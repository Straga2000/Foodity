import React, { Component } from 'react';

import ListElement from './ListElement';

export default class List extends Component {
    state={}
    render() {
        return (
            <div className="col-lg-12 card">
                <div className="card-title mb-0 mt-3 ml-3">
                    <h4>New Orders </h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th>Name</th>
                                    <th>Product</th>
                                    <th>quantity</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <ListElement/>
                            <ListElement/>
                            <ListElement/>
                            <ListElement/>
                        </table>
                    </div>
                </div>
            </div>
    );
    }
}