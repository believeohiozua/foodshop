import React, { Component, Fragment } from 'react'
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";
import { Link } from 'react-router-dom';

export class CartList extends Component {
    openCouponForm = () => {
        var coupon_form = document.getElementById("coupon_form");
        var coupon_form_switch = document.getElementById("coupon_form_switch");
        if (coupon_form.style.display == "none") {
            coupon_form.style.display = "";
            coupon_form_switch.innerHTML = "<span className='text_danger'>Close Form</span>";
        } else if (coupon_form.style.display == "") {
            coupon_form.style.display = "none";
            coupon_form_switch.innerHTML = "Add a coupon code";
        }
    }
    render() {
        return (
            <Fragment>
                <NavBar />
                <main id="main" className="container" style={{ marginTop: "4em" }}>
                    <div className="col-md-12 bg-white" data-scroll-reveal="enter from the top after 0.3s">
                        <h1 className="text-center my-0 my-lg-2 fs-4 small p-1" id="welcome_note">
                            Cart List
                            </h1>
                    </div>
                    <section className="row">





                        <div className="col-lg-8">


                            <div className="mb-3">
                                <div className="pt-4 wish-list">

                                    <h5 className="mb-4"><u>Cart (<span>2</span>) items</u></h5>

                                    <div className="row mb-4">
                                        <div className="col-md-5 col-lg-3 col-xl-3">
                                            <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                                <img className="" id="cart_img"
                                                    src="static/img/produce/prod (1).jpg" alt="Sample" />
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-lg-9 col-xl-9 mb-2">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5>Banga</h5>
                                                        <p className="mb-0 text-muted text-uppercase small">
                                                            <strong>Breed:</strong>&ensp;hybrid
                                                            </p>
                                                        <p className="mb-0 text-muted text-uppercase small">
                                                            <strong>Weight:</strong>&ensp;10kg
                                                            </p>
                                                        {/* <p className="mb-0 text-muted text-uppercase small">Size: M</p> */}
                                                    </div>
                                                    <div className="text-center mx-auto">
                                                        <div className="def-number-input number-input safari_only mb-0 w-100">
                                                            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                                className="btn btn-success btn-sm rounded-circle">+</button>
                                                            <span className="m-1">
                                                                <input className="col-4" min="0" name="quantity" value="1" type="number" />
                                                            </span>
                                                            <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                                className="btn btn-danger btn-sm rounded-circle disabled">-</button>
                                                        </div>
                                                        {/* kkk */}
                                                        <div className="d-block justify-content-between align-items-center">
                                                            <p className="mb-0"><span><strong id="summary">$17.99</strong></span></p>

                                                            <div className="text-center mx-auto border-top">
                                                                <Link to="#" type="button" className="card-link-secondary small text-uppercase">
                                                                    <i className="fs-6 fw-bold bi bi-heart-fill text-warning"></i>
                                                                </Link>
                                                        &ensp; &ensp;
                                                         <Link to="#" type="button" className="card-link-secondary small text-uppercase mr-3">
                                                                    <i class="fs-6 fw-bold bi bi-trash text-danger"></i>
                                                                </Link>
                                                            </div>


                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <hr className="mb-4" />
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-5 col-lg-3 col-xl-3">
                                            <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                                <img className="" id="cart_img"
                                                    src="static/img/produce/prod (2).jpg" alt="Sample" />
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-lg-9 col-xl-9 mb-2">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <h5>Rice</h5>
                                                        <p className="mb-0 text-muted text-uppercase small">
                                                            <strong>Breed:</strong>&ensp;hybrid
                                                            </p>
                                                        <p className="mb-0 text-muted text-uppercase small">
                                                            <strong>Weight:</strong>&ensp;10kg
                                                            </p>
                                                        {/* <p className="mb-0 text-muted text-uppercase small">Size: M</p> */}
                                                    </div>
                                                    <div className="text-center mx-auto">
                                                        <div className="def-number-input number-input safari_only mb-0 w-100">
                                                            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                                className="btn btn-success btn-sm rounded-circle">+</button>
                                                            <span className="m-1">
                                                                <input className="col-4" min="0" name="quantity" value="1" type="number" />
                                                            </span>
                                                            <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                                className="btn btn-danger btn-sm rounded-circle disabled">-</button>
                                                        </div>
                                                        {/* kkk */}
                                                        <div className="d-block justify-content-between align-items-center">
                                                            <p className="mb-0"><span><strong id="summary">$28.89</strong></span></p>

                                                            <div className="text-center mx-auto border-top">
                                                                <Link to="#" type="button" className="card-link-secondary small text-uppercase">
                                                                    <i className="fs-6 fw-bold bi bi-heart-fill text-warning"></i>
                                                                </Link>
                                                        &ensp; &ensp;
                                                         <Link to="#" type="button" className="card-link-secondary small text-uppercase mr-3">
                                                                    <i class="fs-6 fw-bold bi bi-trash text-danger"></i>
                                                                </Link>
                                                            </div>


                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <hr className="mb-4" />
                                    </div>

                                </div>
                            </div>






                        </div>



                        <div className="col-lg-4">


                            <div className="mb-3 card p-2 rounded-lg">
                                <div className="pt-4">

                                    <h5 className=" text-center">Checkout</h5>

                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Total amount
                                                    <span>$25.98</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>$5.98</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Grand Total</strong>
                                            </div>
                                            <span><strong>$53.98</strong></span>
                                        </li>
                                    </ul>
                                    <div className="mb-3 mx-auto text-center">
                                        <div className="pt-4">
                                            <div className="sidebar-item search-form" id="coupon_form"
                                                style={{ display: "none" }}>
                                                <form action="">
                                                    <input type="text" className="font-weight-light py-1" style={{ marginRight: 6, borderRadius: 5, border: "solid 0.3px green " }} />

                                                    <button type="submit" className="btn btn-success rounded-pill btn-sm py-1">
                                                        <i className="bi bi-check text-white"></i></button>
                                                </form>
                                            </div>
                                            <Link className="" onClick={this.openCouponForm}>
                                                <small id="coupon_form_switch"> Add a coupon code </small>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="text-center">
                                {/* <button type="button" className="btn btn-success btn-sm">go to checkout</button> */}
                                <Link to="/checkout" className="btn btn-success btn-sm rounded-pill">go to checkout</Link>
                            </div>


                            <div className="mb-3">
                                <div className="pt-4 text-center">

                                    <h5 className="mb-4">We accept</h5>

                                    <img className="mr-2" width="45px"
                                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa" />
                                    <img className="mr-2" width="45px"
                                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express" />
                                    <img className="mr-2" width="45px"
                                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard" />
                                    <img className="mr-2" width="45px"
                                        src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                        alt="PayPal acceptance mark" />
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

export default CartList
