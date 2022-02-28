import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { VaasUserSignup, getUserData } from "../../../redux/action/generalActions"
import { createMessage } from '../../../redux/action/alertAction';
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";

export class Signup extends Component {
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
                                        Account Sign up
                      </h1>
                                </div>
                                <p className="text-center">Already have an Account? <Link to="/login">Sign in
                                 <i className="la la-arrow-right"></i></Link></p>
                                <form onSubmit={this.onRegister} className=""
                                    ref={(el) => this.dataCreateForm = el}>
                                    {/* <div className="text-center mb-3">
                                                <p>Sign up with:</p>
                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-google"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-github"></i>
                                                </button>
                                            </div> */}

                                    {/* <p className="text-center">or:</p> */}


                                    <div className="form-outline mb-4">
                                        <input
                                            type="text"
                                            id="first_name"
                                            className="form-control"
                                            name="first_name"
                                            onChange={this.onChange}
                                            required
                                            autoComplete="off"
                                        />
                                        <label className="form-label" htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input
                                            type="text"
                                            id="last_name"
                                            className="form-control"
                                            name="last_name"
                                            onChange={this.onChange}
                                            required
                                            autoComplete="off"
                                        />
                                        <label className="form-label" htmlFor="last_name">Last Name</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            onChange={this.onChange}
                                            required
                                            autoComplete="off"
                                        />
                                        <label className="form-label" htmlFor="email">Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="number"
                                            id="phone"
                                            className="form-control"
                                            name="phone"
                                            onChange={this.onChange}
                                            required
                                            autoComplete="off"
                                        />
                                        <label className="form-label" htmlFor="phone">phone No.</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="password1"
                                            className="form-control"
                                            name="password1"
                                            onChange={this.onChange}
                                            required
                                            autoComplete="off"
                                        />
                                        <label className="form-label" htmlFor="password1">Password</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="password2"
                                            className="form-control"
                                            name="password2"
                                            onChange={this.onChange}
                                            required
                                            autoComplete="off"
                                        />
                                        <label className="form-label" htmlFor="password2">Confirm password</label>
                                    </div>


                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input
                                            className="form-check-input me-2  bg-success"
                                            type="checkbox"
                                            value=""
                                            id="registerCheck"
                                            aria-describedby="registerCheckHelpText"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="registerCheck">
                                            <Link to="#"> I have read and agree to the terms</Link>
                                        </label>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" id="spin_reg_btn" className="btn btn-success btn-sm mb-3">Sign Up</button>
                                    </div>
                                </form>

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

export default connect(mapStateToProps, { VaasUserSignup, createMessage, getUserData })(Signup);