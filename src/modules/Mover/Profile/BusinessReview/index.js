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

  render() {
    const { type, rating, rateCount, link } = this.props;
    return (
      <Container>
        <ContainerBox inline between={3}>
          <Logo href={link} src={this.getLogoSrc(type)} />
          <Rate
            value={rating}
            caption={rating.toString()}
            size="lg"
            readOnly
          />
          {rateCount > 0 && <span>({rateCount})</span>}
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
