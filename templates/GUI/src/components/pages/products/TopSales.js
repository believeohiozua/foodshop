import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import { Helmet } from "react-helmet";
export class TopSales extends Component {
    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/custom.js');

    }
    render() {
        return (
            <div id="team" className="team section-bg pt-1" data-scroll-reveal="enter from the bottom after 0.4s">
                <div className="container-fluid">

                    <h1 className="fs-4">Top <strong>Sales</strong></h1>
                    <div className="row">

                        <div id="myCarousel" className="carousel slide container" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="col-6 col-md-3 mx-auto px-1">
                                        <div className="d-flex align-items-stretch">
                                            <div className="member" >
                                                <div className="member-img">
                                                    <img src="static/img/produce/prod (2).jpg" className="img-fluid" alt="" id="prod_img" />
                                                    <div className="social">
                                                        <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="member-info pb-0 pt-1">
                                                    <h1 className="fs-6 fw-bold p-0">Bag of Rice</h1>
                                                    <span className="fs-5 text-dark">₦8000</span>
                                                    <del className="text-muted"><small>₦10500</small></del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="col-6 col-md-3 mx-auto px-1">
                                        <div className="d-flex align-items-stretch">
                                            <div className="member" >
                                                <div className="member-img">
                                                    <img src="static/img/produce/prod (1).jpg" className="img-fluid" alt="" id="prod_img" />
                                                    <div className="social">
                                                        <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="member-info pb-0 pt-1">
                                                    <h1 className="fs-6 fw-bold p-0">Basin of Banga</h1>
                                                    <span className="fs-5 text-dark">₦2000</span>
                                                    <del className="text-muted"><small>₦2800</small></del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-6 col-md-3 mx-auto px-1">
                                        <div className="d-flex align-items-stretch">
                                            <div className="member" >
                                                <div className="member-img">
                                                    <img src="static/img/produce/prod (4).jpg" className="img-fluid" alt="" id="prod_img" />
                                                    <div className="social">
                                                        <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="member-info pb-0 pt-1">
                                                    <h1 className="fs-6 fw-bold p-0">Vegetable</h1>
                                                    <span className="fs-5 text-dark">₦600</span>
                                                    <small>&ensp;</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-6 col-md-3 mx-auto px-1">
                                        <div className="d-flex align-items-stretch">
                                            <div className="member" >
                                                <div className="member-img">
                                                    <img src="static/img/produce/prod (8).jpg" className="img-fluid" alt="" id="prod_img" />
                                                    <div className="social">
                                                        <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="member-info pb-0 pt-1">
                                                    <h1 className="fs-6 fw-bold p-0">Plantain</h1>
                                                    <span className="fs-5 text-dark">₦1500</span>
                                                    <del className="text-muted"><small>₦2200</small></del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-6 col-md-3 mx-auto px-1">
                                        <div className="d-flex align-items-stretch">
                                            <div className="member" >
                                                <div className="member-img">
                                                    <img src="static/img/produce/prod (7).jpg" className="img-fluid" alt="" id="prod_img" />
                                                    <div className="social">
                                                        <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="member-info pb-0 pt-1">
                                                    <h1 className="fs-6 fw-bold p-0">Fruits</h1>
                                                    <span className="fs-5 text-dark">₦800</span>
                                                    <small>&ensp;</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-6 col-md-3 mx-auto px-1">
                                        <div className="d-flex align-items-stretch">
                                            <div className="member" >
                                                <div className="member-img">
                                                    <img src="static/img/produce/prod (6).jpg" className="img-fluid" alt="" id="prod_img" />
                                                    <div className="social">
                                                        <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="member-info pb-0 pt-1">
                                                    <h1 className="fs-6 fw-bold p-0">Cocoa</h1>
                                                    <span className="fs-5 text-dark">₦2000</span>
                                                    <del className="text-muted"><small>₦2800</small></del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-6 col-md-3 mx-auto px-1">
                                        <div className="d-flex align-items-stretch">
                                            <div className="member" >
                                                <div className="member-img">
                                                    <img src="static/img/produce/prod (5).jpg" className="img-fluid" alt="" id="prod_img" />
                                                    <div className="social">
                                                        <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                        <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                                    </div>
                                                </div>
                                                <div className="member-info pb-0 pt-1">
                                                    <h1 className="fs-6 fw-bold p-0">Chicken</h1>
                                                    <span className="fs-5 text-dark">₦2000</span>
                                                    <del className="text-muted"><small>₦2800</small></del>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon border rounded-circle p-2 bg-success" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon border rounded-circle p-2 bg-success" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>


        )
    }
}

export default TopSales
