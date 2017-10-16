import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

class VehiclesInfoManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: isEmpty(props.vehicles) ? VehiclesInfoManagement.defaultProps.vehicles : props.vehicles
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(type, e) {
    const newVehiclesState = Object.assign({}, this.state.vehicles, {
      [type]: parseInt(e.target.value, 10)
    });
    this.setState({
      vehicles: newVehiclesState
    });

    this.props.onChange(newVehiclesState);
  }

  render() {
    const { small, medium, large } = this.state.vehicles;
    return (
      <div>
        <label>
          Small: <input type="number" value={small} onChange={this.handleOnChange.bind(this, 'small')} />
        </label>
        <label>
          Medium: <input type="number" value={medium} onChange={this.handleOnChange.bind(this, 'medium')}/>
        </label>
        <label>
          Large: <input type="number" value={large} onChange={this.handleOnChange.bind(this, 'large')}/>
        </label>
      </div>
    );
  }
}

VehiclesInfoManagement.defaultProps = {
  vehicles: {
    small: 0,
    medium: 0,
    large: 0
  },
  onChange: ()=>{}
};

export default VehiclesInfoManagement;
