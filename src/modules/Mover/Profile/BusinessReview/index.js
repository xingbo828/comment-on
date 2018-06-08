import React, { Component } from 'react';
import { oneOf } from 'prop-types';
import Card from '../../../../globalComponents/Card';
import Rate from '../../../../globalComponents/Rate';
import Box from '../../../../globalComponents/Box';
import googleLogoSrc from './google-my-business.jpg';
import yelpLogoSrc from './yelp-logo.png';

import {
 Container,
 Logo,
 LogoWrapper,
 DetailWrapper,

} from './styles';

class BusinessReview extends Component {
  getLogoSrc = (type) => {
    return type === 'google' ? googleLogoSrc : yelpLogoSrc;
  }
  handleClick = (e) => {
    window.location.replace(this.props.link);
  }

  render() {
    const { type, rating, loading, rateCount } = this.props;
    return (
      <Card style={{width: '300px', minHeight: '120px'}} loading={loading} onClick={this.handleClick}>
          <Container>
              <LogoWrapper><Box vertical={5}><Logo src={this.getLogoSrc(type)} /></Box></LogoWrapper>
              <DetailWrapper>
                <Box vertical={5} between={2}>
                <Rate
                  value={rating}
                  caption={rating.toString()}
                  size="lg"
                  readOnly
                />
                <span>{rateCount} reviews</span>
              </Box>
              </DetailWrapper>
          </Container>
      </Card>
    );
  }
}



BusinessReview.propTypes = {
  type: oneOf(['google', 'yelp'])
};

BusinessReview.defaultProps = {
  rating: 0,
  rateCount: 0,
  link: ''
};
export default BusinessReview;
