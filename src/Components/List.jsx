import React, { Component } from 'react';

import ListElement from './ListElement';
import ProductInfo from '../Database/products'

import ProductImage from '../Images/product.png';

export default class List extends Component {
    state={
        products : ProductInfo
    }

    // constructor() {
    //     super();
    //     this.handleCreate = this.handleCreate().bind(this);
    // }

    // handleCreate = () =>
    // {
    //     this.setState({count: this.state.count + 1});
    // }

    render() {
        const {productInfo}  = this.state;
        console.log(this.state.products);
        return (
            <div className="col-lg-12 card">
                <div className="card-title mb-0 mt-3 ml-3 d-flex row">
                    <h4 className="mr-5">Products</h4>
                    <div className="d-flex row">
                        <button className="btn btn-primary mr-3">Add product</button>
                        <button className="btn btn-primary mr-3">Delete product</button>
                        <button className="btn btn-primary mr-3">Change product</button>
                        <button className="btn btn-primary">Find shop</button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th>Product</th>
                                    <th>Type</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                    <th>Favorite</th>
                                </tr>
                            </thead>
                            {this.state.products.map(prop => (
                                <ListElement name = {prop.title ? prop.title : "Nu exista"}
                                             img = {ProductImage}
                                             quantity = {prop.width ? parseInt(prop.width).toString() : "24"}
                                             favorite = {prop.width ? (parseInt(prop.width) % 2 === 0 ? "yes" : "") : ""}
                                             type = {prop.type}
                                             price = {prop.price}
                                             rating = {prop.rating}
                                />
                            ))}
                        </table>
                    </div>
                </div>
            </div>
    );
    }
}