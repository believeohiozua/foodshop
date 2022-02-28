import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { createMessage } from '../../../redux/action/alertAction';
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";

export class ForgotPassword extends Component {
    state = {
        email: '',
    };
    static propTypes = {
        createMessage: PropTypes.func,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    resetPassword = (e) => {
        var spin = document.getElementById('spin_reset_btn');
        spin.innerHTML = "<i className='spinner-border'></i>" + "&thinsp;" + "processing...";

        const formData = {
            email: this.state.email,
        }
        e.preventDefault();

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        };

        axios
            .post("/rest-auth/password/reset/",
                formData,
                config)
            .then((res) => {
                console.log(res.data.detail)
                document.getElementById("reset_form_sec").style.display = "none";
                document.getElementById("reset_msg_sec").style.display = "";
                document.getElementById("spin_reset_btn").innerHTML = "Submit";
                if (res.data.detail) {
                    this.props.createMessage({ generalInfoMsg: res.data.detail.toString() });
                }
                document.getElementById("res_data").innerHTML = res.data.detail.toString();
            })
            .catch((err) => {
                // alert(err)
                this.props.createMessage({ generalErrorMsg: err.toString() });
            });
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
                                        Reset Password
                      </h1>
                                </div>
                                <p className="text-center">Enter your registered Email</p>
                                <form onSubmit={this.resetPassword} className="my-5" id="reset_form_sec"
                                    ref={(el) => this.dataCreateForm = el}>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="form1Example1"
                                            className="form-control"
                                            name="email"
                                            onChange={this.onChange}
                                            required
                                            autoComplete="off"
                                        />
                                        <label className="form-label" for="form1Example1">Enter your email address</label>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" id="spin_reset_btn" className="btn btn-success btn-sm">Submit</button>
                                    </div>
                                </form>
                                <div className="card p-2 text-center my-2" id="reset_msg_sec" style={{ display: "none" }}>
                                    <p> <span id="res_data"></span> <i className="la la-check"></i></p>
                                    <span className="text-success">
                                        please check your email for the password Reset Link
                                    </span>
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

// const mapStateToProps = (state) => ({
//     userIsAuthenticated: state.mainReducer.vaas_user_is_authenticated,
//     getAuthReport: state.mainReducer.vaas_user_auth_report,
//     myUserData: state.mainReducer.get_user_data,
// });

export default connect(null, { createMessage })(ForgotPassword);

