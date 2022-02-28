import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      console.log(error)
      if (error.msg.first_name) alert.error(`First Name: ${error.msg.first_name.join()}`);
      if (error.msg.last_name) alert.error(`Last Name: ${error.msg.last_name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.phone) alert.error(`Phone No.: ${error.msg.phone.join()}`);
      if (error.msg.password1) alert.error(`password: ${error.msg.password1.join()}`);
      if (error.msg.password2) alert.error(`password: ${error.msg.password2.join()}`);
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
      if (error.msg.vcode) alert.error(error.msg.vcode.join());
      if (error.msg.message) alert.error(error.msg.message);
      if (error.msg.msg) alert.error(error.msg.msg);
      if (error.msg.detail) alert.error(error.msg.detail);
    }

    if (message !== prevProps.message) {
      if (message.authLoginErr) alert.error(message.authLoginErr);
      if (message.authLogin) alert.success(message.authLogin);
      if (message.authSignup) alert.success(message.authSignup);
      if (message.logoutmsg) alert.info(message.logoutmsg);

      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
      if (message.generalSuccessMessage) alert.success(message.generalSuccessMessage);
      if (message.generalInfoMsg) alert.info(message.generalInfoMsg);
      if (message.generalErrorMsg) alert.error(message.generalErrorMsg);
    }

  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
