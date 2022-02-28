import React, { Component } from 'react'
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";
export class Contact extends Component {
    componentWillMount() {
        var loadjs = require('loadjs');
        loadjs('static/js/custom.js');

    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        var title_tag = document.getElementById('title_tag');
        if (title_tag) {
            title_tag.innerHTML = "Agrolyte: CONTACT"
        }
        return (
            <main>

                <NavBar />


                <div className="map-section" style={{ marginTop: "4em" }}>
                    <div className="col-md-12 bg-white" data-scroll-reveal="enter from the top after 0.3s">
                        <h1 className="text-center my-0 my-lg-2 fs-4 small p-1" id="welcome_note">
                            Contact us
                            </h1>
                    </div>
                    <iframe style={{ border: 0, width: '100%', height: '350px' }} data-scroll-reveal="enter from the bottom after 0.3s"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3473526629696!2d5.614127514306522!3d6.349051726929309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d310e657e33b%3A0x658009bce1bbfc19!2s59%20I.C.E.%20Road%2C%20Use%2C%20Benin%20City%2C%20Nigeria!5e0!3m2!1sen!2sbg!4v1612527404614!5m2!1sen!2sbg" frameBorder="0" allowfullscreen />
                </div>

                <section id="contact" className="contact" data-scroll-reveal="enter from the bottom after 0.3s">
                    <div className="container">

                        <div className="row justify-content-center">

                            <div className="col-lg-10">

                                <div className="info-wrap">
                                    <div className="row">
                                        <div className="col-lg-4 info">
                                            <i className="bi bi-geo-alt"></i>
                                            <h4>Location:</h4>
                                            <p>
                                                59, I.C.E road <br />
                                                off wire road<br />
                                                Benin City <br />
                                                Edo state. <br />
                                            </p>
                                        </div>

                                        <div className="col-lg-4 info mt-4 mt-lg-0">
                                            <i className="bi bi-envelope"></i>
                                            <h4>Email:</h4>
                                            <p>info@example.com<br />contact@agrolyte.com</p>
                                        </div>

                                        <div className="col-lg-4 info mt-4 mt-lg-0">
                                            <i className="bi bi-phone"></i>
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 51<br />+1 5589 22475 14</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row mt-5 justify-content-center" data-scroll-reveal="enter from the top after 0.4s">
                            <div className="col-lg-10">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required />
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>
                <Footer />
            </main>
        )
    }
}

export default Contact
