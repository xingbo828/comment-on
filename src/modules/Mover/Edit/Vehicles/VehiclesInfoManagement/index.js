import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import Grid from '../../../../../globalComponents/Grid';
import { NumberField } from '../../../../../globalComponents/Form';
import { Paragraph } from '../../../../../globalComponents/Typography';
import {
  InputWrapper,
  ImgWrapperInner,
  ImgWrapperOutter,
  VehOptionContainer,
  ParaWrapper
} from './Styled';
import pickUpTruck from './imgs/pickup-truck.png';
import van from './imgs/van.png';
import feet16 from './imgs/16-feet-truck.png';
import semiTruck from './imgs/semi-truck.png';


const { Row, Col } = Grid;

class VehiclesInfoManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: isEmpty(props.vehicles)
        ? VehiclesInfoManagement.defaultProps.vehicles
        : props.vehicles
    };
  }

  handleOnChange = type => value => {
    const newVehiclesState = Object.assign({}, this.state);
    newVehiclesState.vehicles[type] = value;
    this.setState(newVehiclesState);
    this.props.onChange(newVehiclesState.vehicles);
  };

  render() {
    const { small, medium, large, xLarge } = this.state.vehicles;
    return (
      <div>
        <VehOptionContainer>
          <Row>
            <Col xs={24} sm={24} md={9} lg={9}>
              <ImgWrapperOutter>
                <ImgWrapperInner>
                  <img src={pickUpTruck} alt="Pick Up Truck" />
                </ImgWrapperInner>
              </ImgWrapperOutter>
            </Col>
            <Col xs={24} sm={24} md={15} lg={15}>
              <ParaWrapper>
                <Paragraph>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Paragraph>
              </ParaWrapper>
              <InputWrapper>
                <NumberField
                  name="smallVehicles"
                  value={small}
                  onChange={this.handleOnChange('small')}
                />
              </InputWrapper>
            </Col>
          </Row>
        </VehOptionContainer>
        <VehOptionContainer>
          <Row>
            <Col xs={24} sm={24} md={9} lg={9}>
              <ImgWrapperOutter>
                <ImgWrapperInner>
                  <img src={van} alt="Van" />
                </ImgWrapperInner>
              </ImgWrapperOutter>
            </Col>
            <Col xs={24} sm={24} md={15} lg={15}>
              <ParaWrapper>
                <Paragraph>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Paragraph>
              </ParaWrapper>
              <InputWrapper>
                <NumberField
                  name="mediumVehicles"
                  value={medium}
                  onChange={this.handleOnChange('medium')}
                />
              </InputWrapper>
            </Col>
          </Row>
        </VehOptionContainer>
        <VehOptionContainer>
          <Row>
            <Col xs={24} sm={24} md={9} lg={9}>
              <ImgWrapperOutter>
                <ImgWrapperInner>
                  <img src={feet16} alt="16 feet truck" />
                </ImgWrapperInner>
              </ImgWrapperOutter>
            </Col>
            <Col xs={24} sm={24} md={15} lg={15}>
              <ParaWrapper>
                <Paragraph>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Paragraph>
              </ParaWrapper>
              <InputWrapper>
                <NumberField
                  name="largeVehicles"
                  value={large}
                  onChange={this.handleOnChange('large')}
                />
              </InputWrapper>
            </Col>
          </Row>
        </VehOptionContainer>
        <VehOptionContainer>
          <Row>
            <Col xs={24} sm={24} md={9} lg={9}>
              <ImgWrapperOutter>
                <ImgWrapperInner>
                  <img src={semiTruck} alt="Semi truck" />
                </ImgWrapperInner>
              </ImgWrapperOutter>
            </Col>
            <Col xs={24} sm={24} md={15} lg={15}>
              <ParaWrapper>
                <Paragraph>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Paragraph>
              </ParaWrapper>
              <InputWrapper>
                <NumberField
                  name="xLargeVehicles"
                  value={xLarge}
                  onChange={this.handleOnChange('xLarge')}
                />
              </InputWrapper>
            </Col>
          </Row>
        </VehOptionContainer>
      </div>
    );
  }
}

VehiclesInfoManagement.defaultProps = {
  vehicles: {
    small: 0,
    medium: 0,
    large: 0,
    xLarge: 0
  },
  onChange: () => {}
};

export default VehiclesInfoManagement;
