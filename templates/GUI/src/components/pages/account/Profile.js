import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { VaasUserSignup, getUserData } from "../../../redux/action/generalActions"
import { createMessage } from '../../../redux/action/alertAction';
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";
import SideBar from "../base/SideBar";
import WishList from "../account/WishList";
import OrderTrack from "../account/OrderTrack";
import Shipper from "../account/Shipper";

export class Profile extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Fragment>
                <NavBar />
                <main id="main"
                    style={{ marginTop: "3em" }}>
                    <div className="col-md-12 bg-white py-3" data-scroll-reveal="enter from the top after 0.3s">
                        <h1 className="text-center my-0 my-lg-2 fs-4 small p-1" id="welcome_note">
                            Samson Doe
                   </h1>
                    </div>
                    <section id="blog" className="blog p-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 mx-auto border-bottom border-lg-4 mb-2 p-4 card border-0"
                                    style={{
                                        borderRadius: "2em",
                                        color: "rgb(0 60 5)",
                                        // background: "rgb(25 135 84 / 43%)"
                                    }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="jumbotron">
                                                <h1 className="display-5">Samson Doe</h1>
                                                <ul className="">
                                                    <li className="">Email@email.com</li>
                                                    <li className="">07012345456</li>
                                                    {/* <li className="list-group-item">A third item</li> */}

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                            <Link to="/profileform" className="btn btn-outline-success btn-sm rounded-pill" href="#" role="button">Update profile</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 entries">

                                    <ul className="nav nav-pills nav-fill mb-3" id="ex1" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="btn btn-outline-success btn-sm active"
                                                id="ex2-tab-1"
                                                data-mdb-toggle="pill"
                                                href="#ex2-pills-1"
                                                role="tab"
                                                aria-controls="ex2-pills-1"
                                                aria-selected="true"
                                            >Wishlist</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="btn btn-outline-success btn-sm"
                                                id="ex2-tab-2"
                                                data-mdb-toggle="pill"
                                                href="#ex2-pills-2"
                                                role="tab"
                                                aria-controls="ex2-pills-2"
                                                aria-selected="false"
                                            >Order List</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="btn btn-outline-success btn-sm"
                                                id="ex2-tab-3"
                                                data-mdb-toggle="pill"
                                                href="#ex2-pills-3"
                                                role="tab"
                                                aria-controls="ex2-pills-3"
                                                aria-selected="false"
                                            >Shipping</a>
                                        </li>
                                    </ul>



                                    <div className="tab-content" id="ex2-content">
                                        <div
                                            className="tab-pane fade show active"
                                            id="ex2-pills-1"
                                            role="tabpanel"
                                            aria-labelledby="ex2-tab-1"
                                        >
                                            <WishList />
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="ex2-pills-2"
                                            role="tabpanel"
                                            aria-labelledby="ex2-tab-2"
                                        >
                                            <OrderTrack />
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="ex2-pills-3"
                                            role="tabpanel"
                                            aria-labelledby="ex2-tab-3"
                                        >
                                            <Shipper />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4" data-scroll-reveal="enter from the top after 0.3s">
                                    <SideBar />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </Fragment>
        )
    }
}

export default Profile;
