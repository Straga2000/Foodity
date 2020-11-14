import React, { Component } from 'react';

export default class ProfileConsumerPage extends Component {
    state = {}

    render() {
        return (
            <div className="d-inline-flex">
                <div class="container mt-5 d-flex">
                <div class="card p-3">
                    <div class="d-flex align-items-center">
                        <div class="image"> <img src="https://cmedia.romaniatv.net/image/201203/full/tarata_culita_43369800.jpg" class="rounded" width="155"/> </div>
                        <div class="ml-3 w-100">
                            <h4 class="mb-0 mt-0">Culita Tarata</h4> <span>Fermier</span>
                            <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                <div class="d-flex flex-column"> <span class="articles">Favourites</span> <span class="number1">38</span> </div>
                                <div class="d-flex flex-column ml-2"> <span class="watchlist">Watchlist</span> <span class="number2">10</span> </div>
                                <div class="d-flex flex-column ml-2"> <span class="followers">Followers</span> <span class="number3">3</span> </div>
                            </div>
                            <div class="button mt-2 d-flex d-inline-flex flex-row align-items-center">
                                <div class="image"> 
                                <img 
                                src ="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fcoin%2Fcoin_PNG36871.png&f=1&nofb=1"
                                height="20" width="20" />
                                <h7 className="ml-1">Banuti: <span class="number4">55</span></h7>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div class="container mt-5 d-flex">
                <div class="ml-5 card p-3">
                    <div class="d-flex align-items-center">
                        <div class="ml-3 w-100">
                            <h4 class="mb-0 mt-0">Lista Produse</h4>
                            <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                <div class="inner-form">
                                    <div class="input-field first-wrap">
                                        <input id="search" type="text" placeholder="Product Name"/>
                                    </div>
                                    <div class="input-field second-wrap">
                                        <input id="location" type="text" placeholder="Location"/>
                                    </div>
                                <div class="input-field third-wrap">
                                    <button class="btn-search" type="button">Search</button>
                                </div>
                                </div>
                            </div>
                            <div class="button mt-2 d-flex d-inline-flex flex-row align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}