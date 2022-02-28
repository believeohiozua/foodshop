import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { authCheckState, getUserData, logout } from "../../../redux/action/generalActions"
import { createMessage } from '../../../redux/action/alertAction';



export class NavBar extends Component {
    static propTypes = {
        authCheckState: PropTypes.func,
        getUserData: PropTypes.func,
        logout: PropTypes.func,
        createMessage: PropTypes.func,
    };
    userLogOut = (e) => {
        e.preventDefault();
        this.props.logout()
        this.props.createMessage({ generalInfoMsg: 'See you Soon' });
    }

    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/script.js');

    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.authCheckState();
    }
    componentDidUpdate(provProps) {
        if (this.props.userIsAuthenticated !== provProps.userIsAuthenticated) {
            this.props.authCheckState();
        }
    }
    render() {
        var urlElements = window.location.href.split('/');
        urlElements.reverse()[0]
        var page = urlElements[0]
        var title_tag = document.getElementById("title_tag");
        if (title_tag) {
            title_tag.innerHTML = "Agrolyte | " + page;
        }
        return (
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    {/* <h1 className="logo me-auto"><Link to="#"><span>Com</span>pany</Link></h1> */}

                    <Link to="/" className="logo me-auto ms-lg-0">
                        <img src="static/img/logo.png" alt="" className="img-fluid rounded" />
                        &ensp; <span className="company_name">AGROLYTE</span>
                    </Link>

                    <nav id="navbar" className="navbar order-last order-lg-0 px-2 shadow-0">
                        <ul>
                            <li>
                                {page == "" ?
                                    <Link to="/" className="active">Home</Link>
                                    :
                                    <Link to="/" className="">Home</Link>
                                }
                            </li>
                            <li>
                                {page == "about" ?
                                    <Link to="/about" className="active">About</Link>
                                    :
                                    <Link to="/about">About</Link>
                                }
                            </li>
                            {/* <li className="dropdown">
                            <Link to="#"><span>About</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Team</Link></li>
                                    <li><Link to="#">Testimonials</Link></li>
                                    <li className="dropdown"><Link to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="#">Deep Drop Down 1</Link></li>
                                            <li><Link to="#">Deep Drop Down 2</Link></li>
                                            <li><Link to="#">Deep Drop Down 3</Link></li>
                                            <li><Link to="#">Deep Drop Down 4</Link></li>
                                            <li><Link to="#">Deep Drop Down 5</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
                            {page == "/services" ?
                                <li><Link to="/services" className="active">Services</Link></li>
                                :
                                <li><Link to="/services">Services</Link></li>
                            }
                            {page == "products" ?
                                <li><Link to="/products" className="active">products</Link></li>
                                :
                                <li><Link to="/products">products</Link></li>
                            }
                            {page == "contact" ?
                                <li><Link to="/contact" className="active">Contact</Link></li>
                                :
                                <li><Link to="/contact">Contact</Link></li>
                            }

                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <div className="header-social-link border-start">
                        <div className="row">
                            <div className="mx-auto col-6">
                                <Link to="/cartlist" className="me-2 text-muted">
                                    <i className="la la-shopping-cart fw-bolder la-lg fs-4"></i>
                                    <p className="badge rounded-pill badge-notification bg-success small" style={{ marginLeft: ".1px" }}>
                                        <span className="mobile_cart">2</span>
                                    </p>
                                </Link>
                            </div>



                            <div className="mx-auto col-6">
                                <span className="dropdown mx-auto">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="las la-chevron-circle-down la-lg fw-bold"></i>
                                    </a>
                                    {this.props.userIsAuthenticated && this.props.myUserData.first_name ?
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li className="text-center">
                                                <Link className="dropdown-item" to="/profile">
                                                    <i className="la la-user fw-bolder la-lg fs-4"></i>
                                                    <span className="small">{this.props.myUserData.first_name}</span>
                                                </Link>
                                            </li>
                                            <li className="text-center">
                                                <Link className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i className="bi bi-power text-danger fs-5"></i> <small> Logout</small>
                                                </Link>
                                            </li>
                                        </ul>
                                        :
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li className="text-center">
                                                <Link className="dropdown-item" to="/login">
                                                    <i className="bi bi-lock text-danger fs-5"></i> <small> Login</small>
                                                </Link>
                                            </li>
                                        </ul>
                                    }
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </header>
        )
    }
}
const mapStateToProps = (state) => ({
    userIsAuthenticated: state.mainReducer.vaas_user_is_authenticated,
    myUserData: state.mainReducer.get_user_data,
});

export default connect(mapStateToProps, { getUserData, authCheckState, logout, createMessage })(NavBar);

