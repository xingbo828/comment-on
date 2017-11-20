import React from 'react';
import { number, string, oneOf, func, bool } from 'prop-types';
import Grid from '../../../../../globalComponents/Grid';
import Rate from '../../../../../globalComponents/Rate';
import {
  LogoContainer,
  ItemRow
} from './Styled';
const {Col} = Grid;

const SearchResultItem = ({logo, name, id, rate, rateCount, price}) => {
  return (
    <ItemRow>
      <Col xs={6} sm={6} md={4} lg={4}>
        <div>
          <LogoContainer src={logo} />
        </div>
      </Col>
      <Col xs={18} sm={18} md={8} lg={8}>
        {name}
      </Col>
      <Col xs={12} sm={12} md={6} lg={6}><Rate value={rate} readOnly caption={`(${rateCount})`} /></Col>
      <Col xs={12} sm={12} md={6} lg={6}>${price}</Col>
    </ItemRow>
  );
};

SearchResultItem.propTypes = {
  /** Logo url */
  logo: string,
  name: string,
  id: string,
  rate: number,
  rateCount: number,
  price: number,
};

SearchResultItem.defaultProps = {
  rate: 3.5,
  rateCount: 7
};

export default SearchResultItem;
