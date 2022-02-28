import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { VaasUserLogin } from "../../../redux/action/generalActions"
import { createMessage } from '../../../redux/action/alertAction';
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";

export class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    static propTypes = {
        VaasUserLogin: PropTypes.func.isRequired,
        createMessage: PropTypes.func,
        userIsAuthenticated: PropTypes.bool,
        getAuthReport: PropTypes.object,
        myUserData: PropTypes.object,
    };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onLogin = (e) => {
        var spin = document.getElementById('spin_login_btn');
        spin.innerHTML = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";
        e.preventDefault();

        this.props.VaasUserLogin(
            this.state.email,
            this.state.password,
        );
    };
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    componentDidUpdate(provProps) {
        if (this.props.getAuthReport !== provProps.getAuthReport) {
            var spin = document.getElementById('spin_login_btn');
            spin.innerHTML = "Sign In";
            console.log("getAuthReport", this.props.getAuthReport)

        } else if (this.props.userIsAuthenticated !== provProps.userIsAuthenticated) {
            if (this.props.userIsAuthenticated) {
                this.props.history.push('/profile');
            }
        }
    }
    render() {
        return (
            <Fragment>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mx-auto">

                            <main id="main"
                                style={{ marginTop: "3em" }}>
                                <div className="col-md-12 bg-white py-3" data-scroll-reveal="enter from the top after 0.3s">
                                    <h1 className="text-center my-0 my-lg-2 fs-4 small p-1" id="welcome_note">
                                        Sign In
                      </h1>
                                </div>
                                <p className="text-center">Dont have an Account? <Link to="/signup">Register
                                 <i className="la la-arrow-right"></i></Link></p>
                                <form onSubmit={this.onLogin} className="my-5"
                                    ref={(el) => this.dataCreateForm = el}>
                                    {/* <div className="text-center mb-3">
                                                <p>Sign in with:</p>
                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-google"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-twitter"></i>
                                                </button>                                               
                                            </div> */}

                                    {/* <p className="text-center">or:</p> */}


                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="loginName"
                                            className="form-control"
                                            name="email"
                                            onChange={this.onChange}
                                            required
                                            autoComplete="off" />
                                        <label className="form-label" htmlFor="loginName">Email or username</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="loginPassword"
                                            className="form-control"
                                            name="password"
                                            onChange={this.onChange}
                                            required
                                            autoComplete="off" />
                                        <label className="form-label" htmlFor="loginPassword">Password</label>
                                    </div>


                                    <div className="row mb-4">
                                        <div className="col-md-6 d-flex justify-content-center">

                                            <div className="form-check mb-3 mb-md-0">
                                                <input
                                                    className="form-check-input bg-success"
                                                    type="checkbox"
                                                    value=""
                                                    id="loginCheck"
                                                // checked
                                                />
                                                <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6 d-flex justify-content-center">
                                            <Link to="/forgotpassword">Forgot password?</Link>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" id="spin_login_btn" className="btn btn-success btn-sm mb-4">Sign in</button>
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

export default connect(mapStateToProps, { createMessage, VaasUserLogin })(Login);
