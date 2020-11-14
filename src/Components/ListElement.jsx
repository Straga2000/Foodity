import React, { Component } from 'react';
import '../Styles/ListElement.css';

import ProductImage from '../Images/product.png';

export default class ListElement extends Component {
    state = {
    }

    render() {
        return (
            <tr>
                <td>
                    <a href="">
                        <img width="10%" className="round-img img-fluid" src={ProductImage} alt=""/>
                    </a>
                </td>
                <td>Lew Shawon</td>
                <td><span>Dell-985</span></td>
                <td><span>456 pcs</span></td>
                <td><span className="badge badge-success">Done</span></td>
            </tr>
        );
    }
}