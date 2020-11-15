import React, { Component } from 'react';
import '../Styles/ListElement.css';

import ProductImage from '../Images/product.png';

export default class ListElement extends Component {
    state = {
        name: this.props.name,
        img: this.props.img,
        quanitity: this.props.quantity,
        favorite: this.props.favorite,
        type: this.props.type,
        price: this.props.price,
        rating: this.props.rating
    }

    render() {

        const {img, quanitity, favorite, name, type, price, rating} = this.state;

        return (
            <tr>
                <td>
                    <img width="10%" className="rounded img-fluid" src={img === "" ? ProductImage : img} alt=""/>
                </td>
                <td>{name}</td>
                <td><span>{type}</span></td>
                <td><span>{quanitity}</span></td>
                <td><span>{price}</span></td>
                <td><span>{rating}</span></td>
                <td>{favorite !== "" ?
                    <span className="badge badge-success">
                        <i className="fas fa-heart"></i>
                    </span>
                    : <span className="badge badge-secondary">No</span>
                }</td>
            </tr>
        );
    }
}