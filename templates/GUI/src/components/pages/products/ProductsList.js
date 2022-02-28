import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
import LatestProducts from "./LatestProducts";
import TopSales from "./TopSales";

export class productsList extends Component {
    render() {
        return (
            <Fragment>
                <LatestProducts />
                <TopSales />
            </Fragment>
        )
    }
}

export default productsList;
