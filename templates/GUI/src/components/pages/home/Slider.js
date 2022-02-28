import React, { Component } from 'react'

export class Slider extends Component {
    render() {
        return (

            <section id="hero">
                <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active" id="caruorsel_slider_1"
                        //  style={{ backgroundImage: 'url(../../static/img/produce/rice.jpg)' }}
                        >
                            <img src="../../static/img/produce/prod (3).jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-block carousel-content animate__animated animate__fadeInUp">
                                <h5>first slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" id="caruorsel_slider_1"
                        //  style={{ backgroundImage: 'url(../../static/img/produce/rice.jpg)' }}
                        >
                            <img src="../../static/img/produce/rice.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-block carousel-content animate__animated animate__fadeInUp">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" id="caruorsel_slider_1"
                        //  style={{ backgroundImage: 'url(../../static/img/produce/rice.jpg)' }}
                        >
                            <img src="../../static/img/produce/prod (8).jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-block carousel-content animate__animated animate__fadeInUp">
                                <h5>third slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>


                        {/* <div className="carousel-item" id="caruorsel_slider_2" style={{ backgroundImage: 'url(../../static/img/produce/sheep.jpg)' }}>
                            <div className="carousel-container">
                                <div className="carousel-content animate__animated animate__fadeInUp">
                                    <h2>Our solution</h2>
                                    <p>We do this by connecting buyers to agro products and food items of their choice with just a click from their phones or computer
</p>
                                    <div className="text-center"><a href="" className="btn-get-started">Read More</a></div>
                                </div>
                            </div>
                        </div> */}


                        {/* <div className="carousel-item" id="caruorsel_slider_3" style={{ backgroundImage: 'url(../../static/img/produce/prod.jpg)' }}>
                            <div className="carousel-container">
                                <div className="carousel-content animate__animated animate__fadeInUp">
                                    <h2>our Advantage</h2>
                                    <p>Access to a large data base of farmers who we have worked with through our team members involvement with the Edo State Skills Development Agency's Food and Agriculture Cluster project for creating market for Rural farmers in Edo State, Nigeria. This enables us to buy farm produce at below market price and sell at competitive prices to our clients. </p>
                                    <div className="text-center"><a href="" className="btn-get-started">Read More</a></div>
                                </div>
                            </div>
                        </div> */}

                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                    <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                </div>
            </section>
        )
    }
}

export default Slider
