import React, { Component } from 'react'

export class OrderTrack extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="text-center fs-5 my-2">Order List</h1>
                <div className="row">
                    <div className="col-md-12 border pb-3 m-2">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="fs-6 my-1"><b>Order ID:</b> OD45345345435</h1>
                                <div className="row border py-2">
                                    <div className="col-md-3 text-center">
                                        <div className="card p-1 border-0 shadow rounded-lg">
                                            <small>
                                                <b>Estimated Delivery time:</b>
                                                <br />
                                                <span><i className="la la-clock"></i>29 nov 2019</span>

                                            </small>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <div className="card p-1 border-0 shadow rounded-lg">
                                            <small>
                                                <b>Shipping BY:</b>
                                                <br />
                                                <span>BLUEDART</span>
                                                <br />
                                                <span><i className="la la-phone"></i> 070375989</span>
                                            </small>
                                        </div>
                                    </div>

                                    <div className="col-md-3 text-center">
                                        <div className="card p-1 border-0 shadow rounded-lg">
                                            <small>
                                                <b>Delivery Status:</b>
                                                <br />
                                                <span>
                                                    <i class="las la-shipping-fast"></i>
                                             &ensp;Courier&ensp;
                                             {/* <sup className="small">pending</sup> */}
                                                    <i className="la la-check text-success fw-bold"></i></span>
                                                <br />
                                                <span>
                                                    <i className="la la-car"></i>
                                            &ensp;Pickup&ensp;
                                            <sup className="small text-warning">pending</sup>
                                                    {/* <i className="la la-check text-success fw-bold"></i> */}
                                                </span>
                                                <br />
                                            </small>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <div className="card p-1 border-0 shadow rounded-lg">
                                            <small>
                                                <b>Confirm Delivery</b> <br />
                                                <button className="mt-3 rounded-pill btn smnall btn-outline-success btn-sm">
                                                    <small>Confirm</small>
                                                </button>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3 d-none d-md-block d-sm-none">
                                <div>
                                    <small className="">
                                        <sub className="small border rounded-pill text-center px-1 py-2 bg-info text-white">
                                            <i className="la la-check"></i>  Order Confirmed <i className="la la-arrow-right"></i>
                                        </sub>
                                    </small>
                                    <svg version="1.1" id="line_2" x="0px" y="0px" width="35px" height="5px">
                                        <path class="path2" fill="#01a09e" stroke-width="3" stroke="#01a09e" d="M0 0 l1120 0" />
                                    </svg>
                                    <small className="">
                                        <sub className="small border rounded-pill text-center px-1 py-2 bg-secondary text-white">
                                            <i className="la la-check"></i>  Package in Transit <i className="la la-arrow-right"></i>
                                        </sub>
                                    </small>
                                    <svg version="1.1" id="line_2" x="0px" y="0px" width="35px" height="5px">
                                        <path class="path2" fill="#01a09e" stroke-width="3" stroke="#01a09e" d="M0 0 l1120 0" />
                                    </svg>
                                    <small className="">
                                        <sub className="small border rounded-pill text-center px-1 py-2 bg-warning text-white">
                                            <i className="la la-check"></i>  Package Delivered <i className="la la-arrow-right"></i>
                                        </sub>
                                    </small>
                                    <svg version="1.1" id="line_2" x="0px" y="0px" width="35px" height="5px">
                                        <path class="path2" fill="#01a09e" stroke-width="3" stroke="#01a09e" d="M0 0 l1120 0" />
                                    </svg>
                                    <small className="">
                                        <sub className="small border rounded-pill text-center px-1 py-2 bg-success text-white">
                                            <i className="la la-check"></i> Delivery Confirmed <i className="la la-arrow-right"></i>
                                        </sub>
                                    </small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 border pb-3 m-2">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="fs-6 my-1"><b>Order ID:</b> OD45345345435</h1>
                                <div className="row border py-2">
                                    <div className="col-md-3 text-center">
                                        <div className="card p-1 border-0 shadow rounded-lg">
                                            <small>
                                                <b>Estimated Delivery time:</b>
                                                <br />
                                                <span><i className="la la-clock"></i>29 nov 2019</span>

                                            </small>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <div className="card p-1 border-0 shadow rounded-lg">
                                            <small>
                                                <b>Shipping BY:</b>
                                                <br />
                                                <span>BLUEDART</span>
                                                <br />
                                                <span><i className="la la-phone"></i> 070375989</span>
                                            </small>
                                        </div>
                                    </div>

                                    <div className="col-md-3 text-center">
                                        <div className="card p-1 border-0 shadow rounded-lg">
                                            <small>
                                                <b>Delivery Status:</b>
                                                <br />
                                                <span>
                                                    <i class="las la-shipping-fast"></i>
                                             &ensp;Courier&ensp;
                                             {/* <sup className="small">pending</sup> */}
                                                    <i className="la la-check text-success fw-bold"></i></span>
                                                <br />
                                                <span>
                                                    <i className="la la-car"></i>
                                            &ensp;Pickup&ensp;
                                            {/* <sup className="small text-warning">pending</sup> */}
                                                    <i className="la la-check text-success fw-bold"></i>
                                                </span>
                                                <br />
                                            </small>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <div className="card p-1 border-0 shadow rounded-lg">
                                            <small>
                                                <b>Confirm Delivery</b> <br />
                                               Received <span className="bi bi-check fs-4 text-success"></span>
                                                {/* <button className="mt-3 rounded-pill btn smnall btn-outline-success btn-sm">
                                                    <small>Confirm</small>
                                                </button> */}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3  d-none d-md-block d-sm-none">
                                <div>
                                    <small className="">
                                        <sub className="small border rounded-pill text-center px-1 py-2 bg-info text-white">
                                            <i className="la la-check"></i>  Order Confirmed <i className="la la-arrow-right"></i>
                                        </sub>
                                    </small>
                                    <svg version="1.1" id="line_2" x="0px" y="0px" width="35px" height="5px">
                                        <path class="path2" fill="#01a09e" stroke-width="3" stroke="#01a09e" d="M0 0 l1120 0" />
                                    </svg>
                                    <small className="">
                                        <sub className="small border rounded-pill text-center px-1 py-2 bg-secondary text-white">
                                            <i className="la la-check"></i>  Package in Transit <i className="la la-arrow-right"></i>
                                        </sub>
                                    </small>
                                    <svg version="1.1" id="line_2" x="0px" y="0px" width="35px" height="5px">
                                        <path class="path2" fill="#01a09e" stroke-width="3" stroke="#01a09e" d="M0 0 l1120 0" />
                                    </svg>
                                    <small className="">
                                        <sub className="small border rounded-pill text-center px-1 py-2 bg-warning text-white">
                                            <i className="la la-check"></i>  Package Delivered <i className="la la-arrow-right"></i>
                                        </sub>
                                    </small>
                                    <svg version="1.1" id="line_2" x="0px" y="0px" width="35px" height="5px">
                                        <path class="path2" fill="#01a09e" stroke-width="3" stroke="#01a09e" d="M0 0 l1120 0" />
                                    </svg>
                                    <small className="">
                                        <sub className="small border rounded-pill text-center px-1 py-2 bg-success text-white">
                                            <i className="la la-check"></i> Delivery Confirmed <i className="la la-arrow-right"></i>
                                        </sub>
                                    </small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}

export default OrderTrack
