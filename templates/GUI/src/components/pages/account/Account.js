import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { VaasUserSignup, getUserData, VaasUserLogin } from "../../../redux/action/generalActions"
import { createMessage } from '../../../redux/action/alertAction';
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";
import Signup from "./Signup";
import Login from "./Login";

export class Account extends Component {
    state = {
        email: '',
        password1: '',
        password2: '',
        first_name: '',
        last_name: '',
        phone: '',

    };
    static propTypes = {
        VaasUserSignup: PropTypes.func.isRequired,
        getUserData: PropTypes.func,
        VaasUserLogin: PropTypes.func,
        createMessage: PropTypes.func,
        userIsAuthenticated: PropTypes.bool,
        getAuthReport: PropTypes.object,
        myUserData: PropTypes.object,
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    string_to_slug = (str) => {
        str = str.replace(/^\s+|\s+$/g, ""); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaaaeeeeiiiioooouuuunc------";

        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
        }

        str = str
            .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
            .replace(/\s+/g, "-") // collapse whitespace and replace by -
            .replace(/-+/g, "-"); // collapse dashes

        return str;
    }
    onRegister = (e) => {
        var spin = document.getElementById('spin_reg_btn');
        spin.innerHTML = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";
        e.preventDefault();
        const { password1, password2 } = this.state;
        let phone_number = document.getElementById('phone').value;
        if (password1 !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Passwords does not match' });
            document.getElementById('spin_reg_btn').innerHTML = "Sign Up";
        } else if (phone_number.length != 11) {
            this.props.createMessage({ generalErrorMsg: 'Phone Number Must be 11 digits' })
        }
        else {
            var slugify = this.state.first_name + this.state.last_name + (new Date().getTime()).toString(32).slice(1, 10).toUpperCase();
            const slug = this.string_to_slug(slugify)
            localStorage.setItem("slug", slug)
            this.props.VaasUserSignup(
                this.state.email,
                this.state.password1,
                this.state.password2,
                this.state.first_name,
                this.state.last_name,
                this.state.phone,
                slug,

            );
        }
    };
    onLogin = (e) => {
        var spin = document.getElementById('spin_login_btn');
        spin.innerHTML = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";
        e.preventDefault();

        this.props.VaasUserSignup(
            this.state.email,
            this.state.password1,
            this.state.password2,
            this.state.first_name,
            this.state.last_name,
            this.state.phone,
            slug,

        );
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    componentDidUpdate(provProps) {
        if (this.props.getAuthReport !== provProps.getAuthReport) {
            var spin = document.getElementById('spin_reg_btn');
            spin.innerHTML = "Sign Up";
            console.log("getAuthReport", this.props.getAuthReport)

        } else if (this.props.userIsAuthenticated !== provProps.userIsAuthenticated) {
            if (this.props.userIsAuthenticated) {
                let get_slug = localStorage.getItem("slug")
                this.props.getUserData(get_slug)
                console.log("getUserData = ", this.props.myUserData)
                // this.props.history.push(`/profile/${regdata.slug}`);
            }
        }
    }
    render() {
        return (
            <Fragment>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 mx-auto">

                            <main id="main"
                                style={{ marginTop: "3em" }}>
                                <div className="col-md-12 bg-white py-3" data-scroll-reveal="enter from the top after 0.3s">
                                    <h1 className="text-center my-0 my-lg-2 fs-4 small p-1" id="welcome_note">
                                        Accounts
                      </h1>
                                </div>

                                <ul className="nav nav-pills nav-justified my-md-5 my-2" id="ex1" role="tablist">
                                    <li className="nav-item m-1" role="presentation">
                                        <a
                                            className="btn btn-outline-success btn-block active border-0 btn-sm"
                                            id="tab-login"
                                            data-mdb-toggle="pill"
                                            href="#pills-login"
                                            role="tab"
                                            aria-controls="pills-login"
                                            aria-selected="true"
                                        >Login</a>
                                    </li>
                                    <li className="nav-item m-1" role="presentation">
                                        <a
                                            className="btn btn-outline-success btn-block border-0 btn-sm"
                                            id="tab-register"
                                            data-mdb-toggle="pill"
                                            href="#pills-register"
                                            role="tab"
                                            aria-controls="pills-register"
                                            aria-selected="false"
                                        >Register</a>
                                    </li>
                                </ul>



                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-login"
                                        role="tabpanel"
                                        aria-labelledby="tab-login"
                                    >
                                        <Login />
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-register"
                                        role="tabpanel"
                                        aria-labelledby="tab-register"
                                    >
                                        <Signup />
                                    </div>
                                </div>

                            </main>

                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    userIsAuthenticated: state.mainReducer.vaas_user_is_authenticated,
    getAuthReport: state.mainReducer.vaas_user_auth_report,
    myUserData: state.mainReducer.get_user_data,
});

export default connect(mapStateToProps, { VaasUserSignup, createMessage, getUserData, VaasUserLogin })(Account);

