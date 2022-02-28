import React, { Component, Fragment } from 'react';
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";
import SideBar from "../base/SideBar";
import ProductsList from "../products/ProductsList";

export class ProductDetail extends Component {
    render() {
        return (
            <Fragment>
                <main id="main">
                    <div className="entries">
                        <article className="entry">

                            <div className="entry-img mx-auto text-center">
                                <img src="static/img/produce/prod (1).jpg" alt="" className="" height="350" />
                            </div>
                            <h1 className="fs-5 fw-bold">Basin of Banga </h1>
                            <div className="entry-content">
                                <p>
                                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                    Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                    </p>
                                <div className="col-md-9 mx-auto my-3">
                                    <div className="row">
                                        <div className="col mx-auto">
                                            <a href="" className="small btn btn-outline-success btn-sm rounded-pill">
                                                <small> + Add to cart</small>
                                            </a>
                                        </div>
                                        <div className="col mx-auto">
                                            <a href="" className="small btn btn-outline-warning btn-sm rounded-pill">
                                                <small> + Add to wishlist</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="entry-meta container my-2 border-top pt-3">
                                <ul className="row">
                                    <li className="d-flex align-items-center col">
                                        <i className="bi bi-share"></i>
                                    </li>
                                    <li className="d-flex align-items-center col">
                                        <i className="bi bi-facebook"></i>
                                    </li>
                                    <li className="d-flex align-items-center col">
                                        <i className="bi bi-twitter"></i>
                                    </li>
                                    <li className="d-flex align-items-center col">
                                        <i className="bi bi-whatsapp"></i>
                                    </li>
                                    <li className="d-flex align-items-center col">
                                        <i className="bi bi-instagram"></i>
                                    </li>
                                    <li className="d-flex align-items-center col">
                                        <i className="bi bi-telegram"></i>
                                    </li>
                                    <li className="d-flex align-items-center col">
                                        <i className="bi bi-linkedin"></i>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default ProductDetail;
