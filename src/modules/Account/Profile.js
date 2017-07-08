import React,{Component} from 'react';

class Profile extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      displayName: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.setState({
        displayName: nextProps.user.displayName
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
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
    const displayName = this.state.displayName;
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="displayName">
          Name:
          <input type="text" name="displayName" onChange={this.handleInputChange} value={displayName} />
        </label>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default Profile;
