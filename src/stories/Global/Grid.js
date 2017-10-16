import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Grid from '../../globalComponents/Grid';

const { Container, Row, Col } = Grid;

const BasicGrid = () => {
  const oddStyle = {
    backgroundColor: 'rgba(0,160,233,.7)'
  };

  const evenStyle = {
    backgroundColor: '#00a0e9'
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
const GridStory = storiesOf('Global/Grid', module)
  .add('basic usage', withInfo('Basic usage')(BasicGrid));

export default GridStory;
