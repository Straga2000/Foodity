import React, { Component } from 'react';
import  {Link} from 'react-router-dom';

///we need to import images
import shopping from '../Images/Shopping.png';

export default class HomePage extends Component {
    state={}
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header">
                                    <h3 className="text-center font-weight-light my-4">Welcome</h3>
                                </div>
                                <div className="card-body form-group d-flex flex-column align-items-center justify-content-between mt-2 mb-2 p-1">
                                    <img src={shopping} className="img-fluid w-75" alt="Responsive image"></img>
                                    <Link to="/login" className="btn btn-primary m-2 w-75">Login</Link>
                                    <Link to="/signup" className="btn btn-primary m-2 w-75">Signup</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}