import React, { Component } from 'react';
import '../Styles/ListElement.css';

export default class ListElement extends Component {
    state = {
    }

    render() {
        return (
                                <tr>
                                    <td>
                                        <div className="round-img">
                                            <a href="">
                                                <img className="w-35" src="../Images/product.png" alt=""></a>
                                        </div>
                                    </td>
                                    <td>Lew Shawon</td>
                                    <td><span>Dell-985</span></td>
                                    <td><span>456 pcs</span></td>
                                    <td><span className="badge badge-success">Done</span></td>
                                    </tr>
        );
    }
}