import React, { Component } from "react";
import PropTypes from 'prop-types';

const withSettingsContext = (WrappedComponent) => {
  class WithSettingsContext extends Component {
    render() {
      return React.createElement(
          WrappedComponent,
          { ...this.props, formMode: this.context.formMode, toggleFormMode: this.context.toggleFormMode }
      );
    }
  }

  WithSettingsContext.contextTypes = {
    formMode: PropTypes.bool,
    toggleFormMode: PropTypes.func
  };
  return WithSettingsContext;
};

export default withSettingsContext;
