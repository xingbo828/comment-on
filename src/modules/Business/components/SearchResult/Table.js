import React from 'react';
import { number, string, oneOf, func, bool, array } from 'prop-types';
import Grid from '../../../../globalComponents/Grid';
import SearchResultItem from './Item';
import {
  LogoContainer,
  ItemRow,
  HeaderRow
} from './Styled';

const {Row, Col} = Grid;


const SearchResultTable = ({searchResult, onItemClick}) => {
  // const clickHandler = (id) => {
  //   history.push({
  //     pathname: `/business/profile/${id}`
  //   });
  // };
  const listings = searchResult.map((item) =>
    <SearchResultItem
      key={item.id}
      price={249}
      name={item.businessName}
      id={item.id}
      rate={3.5}
      rateCount={6}
      logo={item.logo}
      onClick={onItemClick}
    />
  );
  return (
    <div>
      <HeaderRow>
        <Col xs={24} sm={24} md={12} lg={12}>Provider</Col>
        <Col xs={12} sm={12} md={6} lg={6}>Rating</Col>
        <Col xs={12} sm={12} md={6} lg={6}>Price</Col>
      </HeaderRow>
      {listings}
    </div>
  );
};

SearchResultTable.propTypes = {
  searchResult: array,
  onItemClick: func,
};

SearchResultTable.defaultProps = {
  onItemClick: () => {},
  searchResult: []
};

export default SearchResultTable;
