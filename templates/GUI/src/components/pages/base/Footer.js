import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Footer extends Component {
    render() {
        return (
            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>AGROLYTE</h3>
                                <p>
                                    59, I.C.E road <br />
                                off wire road<br />
                                Benin City <br />
                                Edo state. <br />
                                    <strong>Phone:</strong> +234 1234567<br />
                                    <strong>Whatsapp:</strong> +234 1234567<br />
                                    <strong>Email:</strong> info@agrolyte.com<br />
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Home</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">About us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Services</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Terms of service</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Product / Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Job Creation</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">connect Farmers </Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Product shipping</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Marketing</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="#">Tradefare</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Get live updates on our products and Services</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" className="rounded" value="Subscribe" />
                                </form>
                                <div className="social-links text-center text-md-right pt-2">
                                    SHARE <i className="la la-share"></i> &ensp;
                                    <Link to="#" className="twitter rounded-circle small"><i className="bx bxl-twitter"></i></Link>
                                    <Link to="#" className="facebook rounded-circle small"><i className="bx bxl-facebook"></i></Link>
                                    <Link to="#" className="instagram rounded-circle small"><i className="bx bxl-instagram"></i></Link>
                                    <Link to="#" className="google-plus rounded-circle small"><i className="bx bxl-skype"></i></Link>
                                    <Link to="#" className="linkedin rounded-circle small"><i className="bx bxl-linkedin"></i></Link>
                                </div>
                                <div className="copyright pt-2">
                                    &copy; Copyright <strong><span>Agrolyte</span></strong>. All Rights Reserved
                                 </div>
                                {/* <div className="credits">
                                    Designed by <Link to="https://www.devtrack.herokuapp.com/">Devtrack.io</Link>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>

                {/* <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Agrolyte</span></strong>. All Rights Reserved
                  </div>
                        <div className="credits">
                            Designed by <Link to="https://www.devtrack.herokuapp.com/">Devtrack.io</Link>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                        <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                        <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                        <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                        <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                    </div>
                </div>
            */}
            </footer>
        )
    }
}

export default Footer;
