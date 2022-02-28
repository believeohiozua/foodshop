import React, { Component } from 'react';
import { BrowserRouter, HashRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from "../redux/action/generalActions"
import { createMessage } from '../redux/action/alertAction';
// routes
import Home from "./pages/home/Home";
import Signup from "./pages/account/Signup";
import Login from "./pages/account/Login";
import AuthPrivateRoute from "./pages/account/AuthPrivateRoute";
import ForgotPassword from "./pages/account/ForgotPassword";
import Profile from "./pages/account/Profile";
import ProfileForm from "./pages/account/ProfileForm";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Service from "./pages/service/Service";
import CartList from "./pages/account/CartList";
import CheckOut from "./pages/account/CheckOut";
import MainProductPage from "./pages/products/MainProductPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";



export class Urls extends Component {
    static propTypes = {
        logout: PropTypes.func,
    };

    userLogOut = (e) => {
        e.preventDefault();
        this.props.logout()
        document.getElementById("closeModal").click();
        this.props.createMessage({ generalInfoMsg: 'See you Soon' });
        this.props.history.push('/');
    }

    render() {

        return (
            <div>
                <div className="loader">
                    <i className="spinner-grow text-primary h1"></i>
                </div>
                <div className="modal fade rounded"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center">Want to Sign Out? </h5>
                                <button type="button" id="closeModal" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="mx-auto row my-3">
                                <div className="col">
                                    <button type="button" className="btn btn-danger btn-sm rounded-pill" data-bs-dismiss="modal">No</button>
                                </div>
                                <div className="col">
                                    <button
                                        onClick={this.userLogOut}
                                        type="button"
                                        className="btn btn-success btn-sm rounded-pill"
                                    >Yes</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BrowserRouter>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/forgotpassword" component={ForgotPassword} />
                            <AuthPrivateRoute path="/profile" component={Profile} />
                            {/* <Route exact path="/profile/:slug/" component={Profile} />{" "} */}
                            <Route exact path="/profileform" component={ProfileForm} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/about" component={AboutUs} />
                            <Route exact path="/cartlist" component={CartList} />
                            <Route exact path="/checkout" component={CheckOut} />
                            <Route exact path="/products" component={MainProductPage} />
                            <Route exact path="/productdetail" component={ProductDetailPage} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/services" component={Service} />
                        </Switch>
                    </Router>
                </BrowserRouter>

                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                    className="bi bi-arrow-up-short"></i></a>
                <div id="preloader"></div>
            </div>
        )
    }
}
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.className += ' hidden';
});

const mapStateToProps = (state) => ({
    userIsAuthenticated: state.mainReducer.vaas_user_is_authenticated,
    myUserData: state.mainReducer.get_user_data,
});

export default connect(mapStateToProps, { logout, createMessage })(Urls);


