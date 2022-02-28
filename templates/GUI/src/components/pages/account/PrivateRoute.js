import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, authmsgchecker, ...rest }) => (
  < Route
    {...rest}
    render={(props) => {
      if (auth.isLoading) {
        return <h2>Loading...</h2>;
      } else if (auth.token === undefined || auth.token === null || authmsgchecker.msg.detail === "Invalid token." || authmsgchecker.status == 401) {    //|| authmsgchecker === "Invalid token." || authstatuschecker == 401
        return <Redirect to="/login" />;
      } else {
        console.log('authmsgchecker', authmsgchecker.detail)
        return <Component {...props} />;

      }
    }}
  />
);

const mapStateToProps = (state) => ({
  // auth: state.authReducer,
  // authmsgchecker: state.errors,
  userIsAuthenticated: state.mainReducer.vaas_user_is_authenticated,

});

export default connect(mapStateToProps)(PrivateRoute);
