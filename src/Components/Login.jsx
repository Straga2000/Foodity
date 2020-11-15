import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Login.css'
///TODO orice link trebuie inlocuti cu link de react
export default class Login extends Component {
    state={
        type : this.props.type
    }
    render() {
        return (
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header"><h3
                                            className="text-center font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label className="small mb-1"
                                                           htmlFor="inputEmailAddress">Email</label>
                                                    <input className="form-control py-4" id="inputEmailAddress"
                                                           type="email" placeholder="Enter email address"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                    <input className="form-control py-4" id="inputPassword" type="password" placeholder="Enter password"></input>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox"></input>
                                                        <label className="custom-control-label" htmlFor="rememberPasswordCheck">
                                                            Remember password
                                                        </label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                                    <a className="small" href="password.html">Forgot Password?</a>
                                                    <Link to="/profileConsumer" className="btn btn-primary">Login</Link>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center">
                                            <div className="small">
                                                <Link to="/signup">Need an account? Sign up!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}