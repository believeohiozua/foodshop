// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';

const AuthPrivateRoute = ({ component: Component, userIsAuthenticated, ...rest }) => {

    // Add your own authentication on the below line.
    const isLoggedIn = userIsAuthenticated

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
}

const mapStateToProps = (state) => ({
    // auth: state.authReducer,
    // authmsgchecker: state.errors,
    userIsAuthenticated: state.mainReducer.vaas_user_is_authenticated,

});

export default connect(mapStateToProps)(AuthPrivateRoute);