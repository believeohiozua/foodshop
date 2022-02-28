import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../base/NavBar";
import Footer from "../base/Footer";
// import Slider from "./Slider";
import AboutSection1 from "../about/AboutSection1";
import ProductsList from "../products/ProductsList";
import SideBar from "../base/SideBar";



export class Home extends Component {



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
            title_tag.innerHTML = "Agrolyte: HOME"
        }
        return (
            <Fragment>
                <NavBar />
                <AboutSection1 />
                <main id="main">
                    <section id="blog" className="blog p-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 entries">
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

export default Home
