import React, { Component } from 'react'
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";

export class CheckOut extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="col-md-12 bg-white" data-scroll-reveal="enter from the top after 0.3s" style={{ marginTop: "5em" }}>
                    <h1 className="text-center my-0 my-lg-2 fs-4 small p-1" id="welcome_note">
                        Checkout Page
                            </h1>
                </div>
                <main class="">
                    <div class="container wow fadeIn">


                        <h2 class="my-5 h2 text-center">Checkout form</h2>


                        <div class="row">


                            <div class="col-md-8 mb-4 order-2 order-lg-1">


                                <div class="card">


                                    <form class="card-body">


                                        <div class="row">


                                            <div class="col-md-6 mb-2">


                                                <div class="md-form ">
                                                    <input type="text" id="firstName" class="form-control" />
                                                    <label for="firstName" class="">First name</label>
                                                </div>

                                            </div>



                                            <div class="col-md-6 mb-2">


                                                <div class="md-form">
                                                    <input type="text" id="lastName" class="form-control" />
                                                    <label for="lastName" class="">Last name</label>
                                                </div>

                                            </div>


                                        </div>



                                        <div class="md-form input-group pl-0 mb-5">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                            <input type="text" class="form-control py-0" placeholder="Username" aria-describedby="basic-addon1" />
                                        </div>


                                        <div class="md-form mb-5">
                                            <input type="text" id="email" class="form-control" placeholder="youremail@example.com" />
                                            <label for="email" class="">Email (optional)</label>
                                        </div>


                                        <div class="md-form mb-5">
                                            <input type="text" id="address" class="form-control" placeholder="1234 Main St" />
                                            <label for="address" class="">Address</label>
                                        </div>


                                        <div class="md-form mb-5">
                                            <input type="text" id="address-2" class="form-control" placeholder="Apartment or suite" />
                                            <label for="address-2" class="">Address 2 (optional)</label>
                                        </div>


                                        <div class="row">


                                            <div class="col-lg-4 col-md-12 mb-4">

                                                <label for="country">Country</label>
                                                <select class="custom-select d-block w-100" id="country" required>
                                                    <option value="">Choose...</option>
                                                    <option>United States</option>
                                                </select>
                                                <div class="invalid-feedback">
                                                    Please select a valid country.
                  </div>

                                            </div>



                                            <div class="col-lg-4 col-md-6 mb-4">

                                                <label for="state">State</label>
                                                <select class="custom-select d-block w-100" id="state" required>
                                                    <option value="">Choose...</option>
                                                    <option>California</option>
                                                </select>
                                                <div class="invalid-feedback">
                                                    Please provide a valid state.
                  </div>

                                            </div>



                                            <div class="col-lg-4 col-md-6 mb-4">

                                                <label for="zip">Zip</label>
                                                <input type="text" class="form-control" id="zip" placeholder="" required />
                                                <div class="invalid-feedback">
                                                    Zip code required.
                  </div>

                                            </div>


                                        </div>


                                        <hr />

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="same-address" />
                                            <label class="custom-control-label" for="same-address">&ensp;Shipping address is the same as my billing address</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="save-info" />
                                            <label class="custom-control-label" for="save-info">&ensp;Save this information for next time</label>
                                        </div>

                                        <hr />

                                        <div class="d-block my-3">
                                            <div class="custom-control custom-radio">
                                                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                                                <label class="custom-control-label" for="credit">&ensp;Credit card</label>
                                            </div>
                                            <div class="custom-control custom-radio">
                                                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
                                                <label class="custom-control-label" for="debit">&ensp;Debit card</label>
                                            </div>
                                            <div class="custom-control custom-radio">
                                                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
                                                <label class="custom-control-label" for="paypal">&ensp;Paypal</label>
                                            </div>
                                        </div>
                                        {/* <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <label for="cc-name">Name on card</label>
                                                <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                                <small class="text-muted">Full name as displayed on card</small>
                                                <div class="invalid-feedback">
                                                    Name on card is required
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <label for="cc-number">Credit card number</label>
                                                <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                                <div class="invalid-feedback">
                                                    Credit card number is required
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3 mb-3">
                                                <label for="cc-expiration">Expiration</label>
                                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                                <div class="invalid-feedback">
                                                    Expiration date required
                                            </div>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label for="cc-expiration">CVV</label>
                                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                                <div class="invalid-feedback">
                                                    Security code required
                                            </div>
                                            </div>
                                        </div> */}
                                        <hr class="mb-4" />
                                        <div className="text-center">
                                            <button class="btn btn-success btn-md rounded-pill" type="submit">Proceed to Payment <i className="la la-angle-right"></i></button>
                                        </div>

                                    </form>

                                </div>


                            </div>



                            <div class="col-md-4 mb-4 order-1 order-lg-2">


                                <h4 class="d-flex justify-content-between align-items-center mb-3">
                                    <span class="text-muted">Your cart</span>
                                    <span class="badge badge-secondary badge-pill">3</span>
                                </h4>


                                <ul class="list-group mb-3 z-depth-1">
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 class="my-0">Product name</h6>
                                            <small class="text-muted">Brief description</small>
                                        </div>
                                        <span class="text-muted">$12</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 class="my-0">Second product</h6>
                                            <small class="text-muted">Brief description</small>
                                        </div>
                                        <span class="text-muted">$8</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 class="my-0">Third item</h6>
                                            <small class="text-muted">Brief description</small>
                                        </div>
                                        <span class="text-muted">$5</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between bg-light">
                                        <div class="text-success">
                                            <h6 class="my-0">Promo code</h6>
                                            <small>EXAMPLECODE</small>
                                        </div>
                                        <span class="text-success">-$5</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between">
                                        <span>Total (USD)</span>
                                        <strong>$20</strong>
                                    </li>
                                </ul>



                                {/* <form class="card p-2">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Promo code" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div class="input-group-append">
                                            <button class="btn btn-success btn-md waves-effect m-0" type="button">Redeem</button>
                                        </div>
                                    </div>
                                </form> */}


                            </div>


                        </div>


                    </div>
                </main>

                <Footer />
            </div>
        )
    }
}

export default CheckOut
