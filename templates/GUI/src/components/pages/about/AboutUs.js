import React, { Component, Fragment } from 'react'
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";

export class AboutUs extends Component {
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
                            About us
                         </h1>
                    </div>



                    <section id="about-us" className="about-us">
                        <div className="container" data-aos="fade-up">

                            <div className="row content">
                                <div className="col-lg-6" data-aos="fade-right">
                                    <h2>Eum ipsam laborum deleniti velitena</h2>
                                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum
            </p>
                                    <ul>
                                        <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                                        <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                        <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                                    </ul>
                                    <p className="font-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
            </p>
                                </div>
                            </div>

                        </div>
                    </section>


                    <section id="team" className="team section-bg">
                        <div className="container">

                            <div className="section-title" data-aos="fade-up">
                                <h2>Our <strong>Team</strong></h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row">

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up">
                                        <div className="member-img">
                                            <img src="static/img/user.jpg" className="img-fluid" alt="" />
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Walter White</h4>
                                            <span>Chief Executive Officer</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="100">
                                        <div className="member-img">
                                            <img src="static/img/user.jpg" className="img-fluid" alt="" />
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="200">
                                        <div className="member-img">
                                            <img src="static/img/user.jpg" className="img-fluid" alt="" />
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>William Anderson</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay="300">
                                        <div className="member-img">
                                            <img src="static/img/user.jpg" className="img-fluid" alt="" />
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Amanda Jepson</h4>
                                            <span>Accountant</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section id="clients" className="clients">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Clients</h2>
                            </div>

                            <div className="row no-gutters clients-wrap clearfix" data-aos="fade-up">

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assets/img/clients/client-7.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4 col-6">
                                    <div className="client-logo">
                                        <img src="assets/img/clients/client-8.png" className="img-fluid" alt="" />
                                    </div>
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

export default AboutUs;
