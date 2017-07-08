import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      displayName: this.props.user.displayName || "",
      photoURL: this.props.user.photoURL || ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.setState({
        ...nextProps.user
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
    } else if (event.target.name === 'profileImage') {
      const file = event.target.files[0];
      const uid = this.props.user.uid;
      this.props.uploadProfileImage(file, uid);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="profileImage">
          Upload profile picture:
          <img src={this.state.photoURL} alt="profile" />
          <input type="file" name="profileImage" onChange={this.handleInputChange} />
        </label>
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
