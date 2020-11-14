import React, { Component } from 'react';

import ListElement from './ListElement';

export default class List extends Component {
    state={}
    render() {
        return (
            // <thead>
            // <tr>
            //     <th>#</th>
            //     <th>Name</th>
            //     <th>Product</th>
            //     <th>quantity</th>
            //     <th>Status</th>
            // </tr>
            // </thead>

            <div className="col-lg-12">
                <div className="card">
                    <div className="card-title">
                        <h4>New Orders </h4>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Product</th>
                                    <th>quantity</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <div className="round-img">
                                            <a href=""><img className="w-35" src="assets/images/avatar/1.jpg"
                                                            alt=""></a>
                                        </div>
                                    </td>
                                    <td>Lew Shawon</td>
                                    <td><span>Dell-985</span></td>
                                    <td><span>456 pcs</span></td>
                                    <td><span className="badge badge-success">Done</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="round-img">
                                            <a href=""><img className="w-35" src="assets/images/avatar/1.jpg"
                                                            alt=""></a>
                                        </div>
                                    </td>
                                    <td>Lew Shawon</td>
                                    <td><span>Asus-565</span></td>
                                    <td><span>456 pcs</span></td>
                                    <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="round-img">
                                            <a href=""><img className="w-35" src="assets/images/avatar/1.jpg"
                                                            alt=""></a>
                                        </div>
                                    </td>
                                    <td>lew Shawon</td>
                                    <td><span>Dell-985</span></td>
                                    <td><span>456 pcs</span></td>
                                    <td><span className="badge badge-success">Done</span></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="round-img">
                                            <a href=""><img className="w-35" src="assets/images/avatar/1.jpg"
                                                            alt=""></a>
                                        </div>
                                    </td>
                                    <td>Lew Shawon</td>
                                    <td><span>Asus-565</span></td>
                                    <td><span>456 pcs</span></td>
                                    <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="round-img">
                                            <a href=""><img className="w-35" src="assets/images/avatar/1.jpg"
                                                            alt=""></a>
                                        </div>
                                    </td>
                                    <td>lew Shawon</td>
                                    <td><span>Dell-985</span></td>
                                    <td><span>456 pcs</span></td>
                                    <td><span className="badge badge-success">Done</span></td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="round-img">
                                            <a href=""><img className="w-35" src="assets/images/avatar/1.jpg"
                                                            alt=""></a>
                                        </div>
                                    </td>
                                    <td>Lew Shawon</td>
                                    <td><span>Asus-565</span></td>
                                    <td><span>456 pcs</span></td>
                                    <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}