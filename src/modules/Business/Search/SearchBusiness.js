import React, { Component } from 'react';
import { BusinessCardList, BusinessCard } from './Styled';

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
        <pre>{JSON.stringify(business, null, 2) }</pre>
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
