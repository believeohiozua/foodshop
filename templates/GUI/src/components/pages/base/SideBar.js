import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class SideBar extends Component {
    render() {
        return (



            <div className="sidebar">

                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                    <form action="">
                        <input type="text" />
                        <button type="submit"><i className="bi bi-search"></i></button>
                    </form>
                    <Link to=""
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal">
                        <small className="small text-success">Advance Search</small>
                    </Link>




                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content border-0">
                                <div className="modal-header border-0">
                                    <h5 className="modal-title" id="exampleModalLabel">Advance Search</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-mdb-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <form>
                                    <div className="modal-body border-0">

                                        <div className="col-12">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example1" className="form-control" />
                                                <label className="form-label" for="form3Example1">Search item</label>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col-6 mx-auto">
                                            <select className="form-select form-select-sm col-8 mx-auto" aria-label=".form-select-sm example">
                                                <option selected>Choose Category</option>
                                                <option value="1">Foreign</option>
                                                <option value="2">Hybride</option>
                                                <option value="3">Native</option>
                                            </select>
                                        </div>
                                        <br />
                                        <div className="row mb-4">
                                            <div className="col">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1" className="form-control" />
                                                    <label className="form-label" for="form3Example1">Amount From</label>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example2" className="form-control" />
                                                    <label className="form-label" for="form3Example2">Amount to</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center col-12">
                                            <input type="submit" className="btn btn-success btn-sm" value="Search" />
                                        </div>

                                    </div>



                                </form>

                                <div>
                                    <div className="text-center my-3">
                                        <button type="button" className="btn btn-danger btn-sm rounded-pill small" data-mdb-dismiss="modal">
                                            <small>Close</small>
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                    <ul>
                        <li><Link to="#">Livestock</Link></li>
                        <li><Link to="#">vegatables</Link></li>
                        <li><Link to="#">poultry</Link></li>
                        <li><Link to="#">Grains</Link></li>
                        <li><Link to="#">Tubers</Link></li>
                        <li><Link to="#">Fishes</Link></li>
                        <li><Link to="#">Dairy</Link></li>
                        <li><Link to="#">Wheat</Link></li>
                        <li><Link to="#">Farmers</Link></li>
                        <li><Link to="#">Hogs</Link></li>
                        <li><Link to="#">Market</Link></li>
                    </ul>
                </div>
                <h3 className="sidebar-title">Express Sales</h3>
                <div className="sidebar-item recent-posts row">
                    <div className="post-item clearfix col mt-2">
                        <img src="static/img/produce/smail.jpg" alt="" />
                        <h4><Link to="blog-single.html">A rubber of snail</Link></h4>
                        <time dateTime="2020-01-01">₦2000</time>
                    </div>

                    <div className="post-item clearfix col">
                        <img src="static/img/produce/prod (8).jpg" alt="" />
                        <h4><Link to="blog-single.html">Bunch of banana</Link></h4>
                        <time dateTime="2020-01-01">₦2000</time>
                    </div>

                    <div className="post-item clearfix col">
                        <img src="static/img/produce/rice.jpg" alt="" />
                        <h4><Link to="blog-single.html">Bag of local rice</Link></h4>
                        <time dateTime="2020-01-01">₦2000</time>
                    </div>

                    <div className="post-item clearfix col">
                        <img src="static/img/produce/prod (5).jpg" alt="" />
                        <h4><Link to="blog-single.html">Mature broiler</Link></h4>
                        <time dateTime="2020-01-01">₦2000</time>
                    </div>

                    <div className="post-item clearfix col">
                        <img src="static/img/produce/sheep.jpg" alt="" />
                        <h4><Link to="blog-single.html">Rams</Link></h4>
                        <time dateTime="2020-01-01">₦2000</time>
                    </div>
                </div>
                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                    <ul className="row">
                        <li className="col-4 mt-2"><Link to="#">Livestock <span>(25)</span></Link></li>
                        <li className="col-4"><Link to="#">Tubers <span>(12)</span></Link></li>
                        <li className="col-4"><Link to="#">Farms <span>(5)</span></Link></li>
                        <li className="col-4"><Link to="#">Fruits <span>(22)</span></Link></li>
                        <li className="col-4"><Link to="#">Dairy <span>(8)</span></Link></li>
                        <li className="col-4"><Link to="#">Grain <span>(14)</span></Link></li>
                    </ul>
                </div>





            </div>



        )
    }
}

export default SideBar
