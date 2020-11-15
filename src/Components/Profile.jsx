import React, { Component } from 'react';

export default class Profile extends Component {
    state={
        img : this.props.img,
        name: this.props.name,
        location : this.props.location
    }
    render() {

        const {img, name, location} = this.state

        return (
            <div className="pb-2">
                <div className="media align-items-end profile-head">
                    <div className="profile mt-2 d-flex">
                        <img src={img} alt="..." className="rounded mb-1 mt-1 img-thumbnail w-25"/>
                        <div className="flex-column">
                            <div className="ml-3 mb-3">
                                <h4 className="mt-0 mb-0">{name}</h4>
                                <p className="small mt-0">
                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                    {location}
                                </p>
                            </div>
                            <div className="ml-3">
                                <ul className="list-inline">
                                    <li className="list-inline-item mr-3">
                                        <small className="text-muted">Vegetables</small>
                                        <h5 className="font-weight-bold m-0 d-block">30</h5>
                                    </li>
                                    <li className="list-inline-item mr-3">
                                        <small className="text-muted">Fruits</small>
                                        <h5 className="font-weight-bold m-0 d-block">20</h5>
                                    </li>
                                    <li className="list-inline-item ">
                                        <small className="text-muted">Others</small>
                                        <h5 className="font-weight-bold m-0 d-block">340</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}