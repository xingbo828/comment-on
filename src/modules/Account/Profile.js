import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      displayName: this.props.user.displayName || ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      console.log('componentWillReceiveProps called');
      this.setState({
        displayName: nextProps.user.displayName
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.updateProfile(this.state);
  }

  handleInputChange(event) {
    if (event.target.name === "displayName") {
      this.setState({
        displayName: event.target.value
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="displayName">
          Name:
          <input
            type="text"
            name="displayName"
            onChange={this.handleInputChange}
            value={this.state.displayName} />
        </label>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default Profile;
