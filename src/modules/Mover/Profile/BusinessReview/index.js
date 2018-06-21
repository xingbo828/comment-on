import React, { Component } from 'react';
import { oneOf } from 'prop-types';
import Rate from '../../../../globalComponents/Rate';
import googleLogoSrc from './google-my-business.jpg';
import yelpLogoSrc from './yelp-logo.png';
import {
  Container,
  ContainerBox,
  Logo,
} from './styles';

class BusinessReview extends Component {
  getLogoSrc = (type) => {
    return type === 'google' ? googleLogoSrc : yelpLogoSrc;
  }
  handleClick = (e) => {
    window.location.replace(this.props.link);
  }

  render() {
    const { type, rating, rateCount } = this.props;
    return (
      <Container>
        <ContainerBox inline between={3}>
          <Logo src={this.getLogoSrc(type)} />
          <Rate
            value={rating}
            caption={rating.toString()}
            size="lg"
            readOnly
          />
          <span>({rateCount})</span>
        </ContainerBox>
      </Container>
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
