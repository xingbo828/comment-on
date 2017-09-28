import React, { Component } from 'react';
import { BusinessCardList, BusinessCard, BusinessCardLogo, BusinessCardName, BusinessCardLogoImg } from './Styled';

class SearchBusiness extends Component {
  constructor(props) {
    super(props);
    this.renderBusinessCard = this.renderBusinessCard.bind(this);
  }

  componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    this.props.searchBusiness(params.get('origin'), params.get('destination'), params.get('dateTime'));
  }

  renderBusinessCard() {
    return this.props.search.result.map(business => (
      <BusinessCard key={business.id}>
        <BusinessCardLogo><BusinessCardLogoImg src={business.logo} /></BusinessCardLogo>
        <BusinessCardName>{business.businessName}</BusinessCardName>
        <BusinessCardName>{business.businessAddrCity}</BusinessCardName>
        <BusinessCardName><i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        </BusinessCardName>
        <BusinessCardName>$345.00</BusinessCardName>
      </BusinessCard>
    ));
  }

  render() {
    return (
      <BusinessCardList>
          {this.renderBusinessCard()}
      </BusinessCardList>
    );
  }
};

export default SearchBusiness;
