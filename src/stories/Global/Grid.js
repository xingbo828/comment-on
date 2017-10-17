import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Grid from '../../globalComponents/Grid';

const { Container, Row, Col } = Grid;

const BasicGrid = () => {
  const oddStyle = {
    backgroundColor: 'rgba(255,165,0,.7)'
  };

  const evenStyle = {
    backgroundColor: '#FFA500'
  };

  const contentStyle = {
    padding: '16px 0',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  };
  return (<Container>
    <Row>
      <Col style={oddStyle} xs={24} sm={24} md={12} lg={3}>
        <div style={contentStyle}>
          Col
        </div>
      </Col>
      <Col style={evenStyle} xs={24} sm={24} md={12} lg={4}>
        <div style={contentStyle}>
          Col
        </div>
      </Col>
      <Col style={oddStyle} xs={24} sm={24} md={12} lg={7}>
        <div style={contentStyle}>
          Col
        </div>
      </Col>
      <Col style={evenStyle} xs={24} sm={24} md={12} lg={10}>
        <div style={contentStyle}>
          Col
        </div>
      </Col>
    </Row>
  </Container>);
};


const WithOffsetGrid = () => {
  const oddStyle = {
    backgroundColor: 'rgba(255,165,0,.7)'
  };

  const evenStyle = {
    backgroundColor: '#FFA500'
  };

  const contentStyle = {
    padding: '16px 0',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  };
  return (<Container>
    <Row>
      <Col style={oddStyle} xs={24} sm={24} md={12} lg={3}>
        <div style={contentStyle}>
          Col
        </div>
      </Col>
      <Col style={evenStyle} xs={24} sm={24} md={11} mdOffset={1} lg={4}>
        <div style={contentStyle}>
          Col
        </div>
      </Col>
      <Col style={oddStyle} xs={24} sm={24} md={12} lg={7}>
        <div style={contentStyle}>
          Col
        </div>
      </Col>
      <Col style={evenStyle} xs={24} sm={24} md={11} lg={7} mdOffset={1} lgOffset={3}>
        <div style={contentStyle}>
          Col
        </div>
      </Col>
    </Row>
  </Container>);
};
const GridStory = storiesOf('Global/Grid', module)
  .add('basic usage', withInfo('')(BasicGrid))
  .add('withOffset', withInfo('')(WithOffsetGrid));

export default GridStory;
