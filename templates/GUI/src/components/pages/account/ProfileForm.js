import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";
export class ProfileForm extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <main id="main"
                    style={{ marginTop: "3em" }}>
                    <div className="col-md-12 bg-white py-2" data-scroll-reveal="enter from the top after 0.3s">
                        <h1 className="text-center my-0 my-lg-2 fs-4 small p-1" id="welcome_note">
                            Update Your Profile
                  </h1>
                    </div>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 com-md-8 mx-auto">
                                    <form>

                                        <div className="row mb-4">
                                            <div className="col">
                                                <div className="form-outline">
                                                    <input type="text" id="form6Example1" className="form-control" />
                                                    <label className="form-label" for="form6Example1">First name</label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-outline">
                                                    <input type="text" id="form6Example2" className="form-control" />
                                                    <label className="form-label" for="form6Example2">Last name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form6Example5" className="form-control" />
                                            <label className="form-label" for="form6Example5">Email</label>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <input type="number" id="form6Example6" className="form-control" />
                                            <label className="form-label" for="form6Example6">Phone</label>
                                        </div>


                                        <div className="form-outline mb-4">
                                            <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                                            <label className="form-label" for="form6Example7">Address</label>
                                        </div>


                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input
                                                className="form-check-input me-2 bg-success"
                                                type="checkbox"
                                                value=""
                                                id="form6Example8"
                                            // checked
                                            />
                                            <label className="form-check-label" for="form6Example8"> Agree to Terms and Condition </label>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-success btn-sm mb-4">Update</button>
                                        </div>

                                    </form>
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

export default ProfileForm
