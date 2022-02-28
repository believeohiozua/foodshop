import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class LatestProducts extends Component {
    mySnackBar = (id, msg) => {
        var x = document.getElementById(id);
        // alert("yes");
        x.className = "show_pop";
        x.innerHTML = msg;
        setTimeout(function () { x.className = x.className.replace("show_pop", ""); }, 3000);
    }
    render() {
        return (
            <section id="team" className="team section-bg border-bottom p-0 m-0">
                <div className="container">

                    <div className="section-title" >
                        <h1 className="fs-3">Latest <strong>Produce</strong></h1>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                            ex aliquid fuga eum quidem. Sit sint consectetur velit. </p>
                    </div>
                    <div className="lastest_product" data-scroll-reveal="enter from the bottom after 0.3s">

                        <div className="row">

                            <div className="col-6 col-md-3 d-flex align-items-stretch">

                                <div className="member" >

                                    <div className="member-img">

                                        <img src="static/img/produce/prod (1).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <p id="cart_pop" className="card" ></p>
                                        <p id="whish_list_pop" className="card" ></p>
                                        <div className="social">
                                            <Link to="#" onClick={() => this.mySnackBar("cart_pop", "Added to cart")}><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#" onClick={() => this.mySnackBar("whish_list_pop", "Added to wishlist")}><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="/productdetail"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Basin of Banga</h1>
                                        <span className="fs-5 text-dark">₦2000</span>
                                        <del className="text-muted"><small>₦2800</small></del>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member" >
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (2).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Bag of Rice</h1>
                                        <span className="fs-5 text-dark">₦8000</span>
                                        <del className="text-muted"><small>₦10500</small></del>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member" >
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (3).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Tubers of yam</h1>
                                        <span className="fs-5 text-dark">₦2000</span>
                                        <del className="text-muted"><small>₦2800</small></del>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member" >
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (4).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Vegetable</h1>
                                        <span className="fs-5 text-dark">₦600</span>
                                        {/* <del className="text-muted"><small>₦2800</small></del> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member" >
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (2).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Bag of Rice</h1>
                                        <span className="fs-5 text-dark">₦8000</span>
                                        <del className="text-muted"><small>₦10500</small></del>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member" >
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (3).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Tubers of yam</h1>
                                        <span className="fs-5 text-dark">₦2000</span>
                                        <del className="text-muted"><small>₦2800</small></del>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (5).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Chicken</h1>
                                        <span className="fs-5 text-dark">₦2000</span>
                                        <del className="text-muted"><small>₦2800</small></del>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (6).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Cocoa</h1>
                                        <span className="fs-5 text-dark">₦2000</span>
                                        <del className="text-muted"><small>₦2800</small></del>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (7).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Fruits</h1>
                                        <span className="fs-5 text-dark">₦800</span>
                                        {/* <del className="text-muted"><small>₦1000</small></del> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (8).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Plantain</h1>
                                        <span className="fs-5 text-dark">₦1500</span>
                                        <del className="text-muted"><small>₦2200</small></del>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (6).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Cocoa</h1>
                                        <span className="fs-5 text-dark">₦2000</span>
                                        <del className="text-muted"><small>₦2800</small></del>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3 d-flex align-items-stretch">
                                <div className="member" >
                                    <div className="member-img">
                                        <img src="static/img/produce/prod (1).jpg" className="img-fluid" alt="" id="prod_img" />
                                        <div className="social">
                                            <Link to="#"><i className="bi bi-cart-plus rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-heart-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                            <Link to="#"><i className="bi bi-eye-fill rounded-circle border border-success p-1 text-success fw-bold bg-dark"></i></Link>
                                        </div>
                                    </div>
                                    <div className="member-info pb-0 pt-1">
                                        <h1 className="fs-6 fw-bold p-0">Basin of Banga</h1>
                                        <span className="fs-5 text-dark">₦2000</span>
                                        <del className="text-muted"><small>₦2800</small></del>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className="blog-pagination">
                        <ul className="justify-content-center">
                            <li><a href="#">1</a></li>
                            <li className="active"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                        </ul>
                    </div> */}
                </div>
            </section>
        )
    }
}

export default LatestProducts
