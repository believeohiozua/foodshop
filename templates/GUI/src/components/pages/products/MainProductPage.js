import React, { Component, Fragment } from 'react';
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";
import SideBar from "../base/SideBar";
import ProductsList from "../products/ProductsList";


export class MainProductPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        var title_tag = document.getElementById('title_tag');
        if (title_tag) {
            title_tag.innerHTML = "Agrolyte: PRODUCTS"
        }
        return (
            <Fragment>
                <NavBar />
                <main id="main" style={{ marginTop: "3em" }}>
                    <div className="col-md-12 bg-white py-3" data-scroll-reveal="enter from the top after 0.3s">
                        <h1 className="text-center my-0 my-lg-2 fs-4 small p-1" id="welcome_note">
                            Browse Products
                            </h1>
                    </div>
                    <section id="blog" className="blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 entries" data-scroll-reveal="enter from the bottom after 0.2s">
                                    <ProductsList />
                                </div>
                                <div className="col-lg-4" data-scroll-reveal="enter from the top after 0.3s">
                                    <SideBar />
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

export default MainProductPage;
