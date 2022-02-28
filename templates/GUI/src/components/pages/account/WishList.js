import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class WishList extends Component {
    wishListSnackBar = (id, msg) => {
        var x = document.getElementById(id);
        document.getElementById("wishlist_pop_sec").style.display = "";
        x.className = "show_pop";
        x.innerHTML = msg;
        setTimeout(function () {
            x.className = x.className.replace("show_pop", "");
            document.getElementById("wishlist_pop_sec").style.display = "none";
        }, 3000);
    }
    render() {

        return (
            <div>
                <main>
                    <div class="container">
                        <h1 className="text-center fs-5 my-2">WishList</h1>
                        <section className="p-0 m-0">
                            <div class="row">



                                <div className="col-md-6">
                                    <div className="row">


                                        <div class="col-6 mb-2">
                                            <div className="card p-1">
                                                <div class="view zoom overlay z-depth-2 rounded text-center">
                                                    <img class="wishlist_img" src="static/img/produce/prod (3).jpg" alt="Sample" />
                                                    <div id="wishlist_pop_sec" style={{ display: "none", width: "10px" }}>
                                                        <p id="cart_pop" className=""></p>
                                                    </div>
                                                </div>

                                                <div class="text-center">
                                                    <span className="fs-6 fw-bold">Yam</span>
                                                    <br />
                                                    <span class="text-muted small">Tubers</span>
                                                    <div>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                    </div>

                                                    <h6 class="border p-1">17.99 $</h6>
                                                    <div className="mb-2">
                                                        <Link to="#" class="" onClick={() => this.wishListSnackBar("cart_pop", "Added to cart")}>
                                                            <i className="bi bi-cart-plus rounded-pill border border-success p-1 text-white fw-bold bg-success"></i>
                                                        </Link>
                                           &ensp; <Link to="#" class="">
                                                            <i className="bi bi-eye rounded-pill border border-info p-1 text-white fw-bold bg-info"></i>
                                                        </Link>&ensp;
                                            <Link to="#" class="">
                                                            <i className="bi bi-trash rounded-pill border border-danger p-1 text-white fw-bold bg-danger"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 mb-2">
                                            <div className="card p-1">
                                                <div class="view zoom overlay z-depth-2 rounded text-center">
                                                    <img class="wishlist_img" src="static/img/produce/prod (3).jpg" alt="Sample" />
                                                    <div id="wishlist_pop_sec" style={{ display: "none", width: "10px" }}>
                                                        <p id="cart_pop" className=""></p>
                                                    </div>
                                                </div>

                                                <div class="text-center">
                                                    <span className="fs-6 fw-bold">Yam</span>
                                                    <br />
                                                    <span class="text-muted small">Tubers</span>
                                                    <div>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                    </div>

                                                    <h6 class="border p-1">17.99 $</h6>
                                                    <div className="mb-2">
                                                        <Link to="#" class="" onClick={() => this.wishListSnackBar("cart_pop", "Added to cart")}>
                                                            <i className="bi bi-cart-plus rounded-pill border border-success p-1 text-white fw-bold bg-success"></i>
                                                        </Link>
                                           &ensp; <Link to="#" class="">
                                                            <i className="bi bi-eye rounded-pill border border-info p-1 text-white fw-bold bg-info"></i>
                                                        </Link>&ensp;
                                            <Link to="#" class="">
                                                            <i className="bi bi-trash rounded-pill border border-danger p-1 text-white fw-bold bg-danger"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div class="col-6 mb-2">
                                            <div className="card p-1">
                                                <div class="view zoom overlay z-depth-2 rounded text-center">
                                                    <img class="wishlist_img" src="static/img/produce/prod (3).jpg" alt="Sample" />
                                                    <div id="wishlist_pop_sec" style={{ display: "none", width: "10px" }}>
                                                        <p id="cart_pop" className=""></p>
                                                    </div>
                                                </div>

                                                <div class="text-center">
                                                    <span className="fs-6 fw-bold">Yam</span>
                                                    <br />
                                                    <span class="text-muted small">Tubers</span>
                                                    <div>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                    </div>

                                                    <h6 class="border p-1">17.99 $</h6>
                                                    <div className="mb-2">
                                                        <Link to="#" class="" onClick={() => this.wishListSnackBar("cart_pop", "Added to cart")}>
                                                            <i className="bi bi-cart-plus rounded-pill border border-success p-1 text-white fw-bold bg-success"></i>
                                                        </Link>
                                           &ensp; <Link to="#" class="">
                                                            <i className="bi bi-eye rounded-pill border border-info p-1 text-white fw-bold bg-info"></i>
                                                        </Link>&ensp;
                                            <Link to="#" class="">
                                                            <i className="bi bi-trash rounded-pill border border-danger p-1 text-white fw-bold bg-danger"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 mb-2">
                                            <div className="card p-1">
                                                <div class="view zoom overlay z-depth-2 rounded text-center">
                                                    <img class="wishlist_img" src="static/img/produce/prod (3).jpg" alt="Sample" />
                                                    <div id="wishlist_pop_sec" style={{ display: "none", width: "10px" }}>
                                                        <p id="cart_pop" className=""></p>
                                                    </div>
                                                </div>

                                                <div class="text-center">
                                                    <span className="fs-6 fw-bold">Yam</span>
                                                    <br />
                                                    <span class="text-muted small">Tubers</span>
                                                    <div>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                        <i class="la la-star fa-sm text-primary"></i>
                                                    </div>

                                                    <h6 class="border p-1">17.99 $</h6>
                                                    <div className="mb-2">
                                                        <Link to="#" class="" onClick={() => this.wishListSnackBar("cart_pop", "Added to cart")}>
                                                            <i className="bi bi-cart-plus rounded-pill border border-success p-1 text-white fw-bold bg-success"></i>
                                                        </Link>
                                           &ensp; <Link to="#" class="">
                                                            <i className="bi bi-eye rounded-pill border border-info p-1 text-white fw-bold bg-info"></i>
                                                        </Link>&ensp;
                                            <Link to="#" class="">
                                                            <i className="bi bi-trash rounded-pill border border-danger p-1 text-white fw-bold bg-danger"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </section>


                    </div>
                </main>
            </div>
        )
    }
}

export default WishList
