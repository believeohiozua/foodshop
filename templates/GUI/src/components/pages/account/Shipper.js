import React, { Component, Fragment } from 'react'

export class Shipper extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="fs-4 text-center py-3">
                    Shipping List
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="m-auto border">
                                <ul className="list-group">
                                    <li className="list-group-item bg-success text-white" aria-current="true">Order ID: 123456787</li>
                                    <li className="list-group-item">
                                        <strong>Name: </strong> Samson John
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Address:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Facere fugiat illo, nobis quo doloremque
                                        </li>
                                    <li className="list-group-item">
                                        <strong> Phone Number:</strong> +2342846590760
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="col-6 mx-auto">
                                                <div className="">
                                                    <button className="btn btn-outline-warning btn-sm rounded-pill">
                                                        <small className="small">confirm Pickup</small>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-6 mx-auto">
                                                <div className="">
                                                    <button className="btn btn-outline-success btn-sm rounded-pill">
                                                        <small className="small">confirm delivery</small>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Shipper;
