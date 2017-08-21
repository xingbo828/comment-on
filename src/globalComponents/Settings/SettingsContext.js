import { Component, Children } from "react";
import PropTypes from 'prop-types';

class SettingsContext extends Component {
  constructor(props){
    super(props);
    this.state = {
      formMode: false
    };
    this.toggleFormMode = this.toggleFormMode.bind(this);
  }

  toggleFormMode(){
    this.setState({
      formMode: !this.state.formMode
    });
  }
  getChildContext() {
    return { formMode: this.state.formMode, toggleFormMode: this.toggleFormMode };
  }
  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children);
  }
}
SettingsContext.childContextTypes = {
  formMode: PropTypes.bool.isRequired,
  toggleFormMode: PropTypes.func.isRequired
};
export default SettingsContext;
