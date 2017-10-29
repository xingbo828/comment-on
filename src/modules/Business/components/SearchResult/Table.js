import React from 'react';
import { number, string, oneOf, func, bool, array } from 'prop-types';
import Grid from '../../../../globalComponents/Grid';
import SearchResultItem from './Item';
import {withRouter} from 'react-router-dom';
import {
  LogoContainer,
  ItemRow,
  HeaderRow
} from './Styled';

const {Row, Col} = Grid;


const SearchResultTable = ({searchResult, onItemClick, history}) => {
  const clickHandler = (id) => {
    history.push({
      pathname: `/business/profile/${id}`
    });
  };
  const listings = searchResult.map((item) =>
    <SearchResultItem
      price={249}
      name={item.businessName}
      id={item.id}
      rate={3.5}
      rateCount={6}
      logo={item.logo}
      onClick={clickHandler}
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
  onItemClick: () => { },
  searchResult: [
      {
        businessServiceArea: {
          'bc-burnaby': true,
          'bc-richmond': true,
          'bc-vancouver': true
        },
        businessHour: [
          {
            day: 'mon',
            endTime: 17,
            startTime: 8
          },
          {
            day: 'tue',
            endTime: 17,
            startTime: 8
          },
          {
            day: 'wed',
            endTime: 17,
            startTime: 8
          },
          {
            day: 'fri',
            endTime: 17,
            startTime: 8
          },
          {
            day: 'sun',
            endTime: 17,
            startTime: 8
          }
        ],
        logo: 'https://s3.amazonaws.com/vancouver-bbb/abpages2/images/smallimage61064-000-107557.png',
        businessName: 'Edgemont Moving &amp; Storage Ltd',
        businessImgs: [
          'https://s3.amazonaws.com/vancouver-bbb/abpages2/images/smallimage61064-000-107557.png'
        ],
        vehiclesInfo: {
          large: 1,
          medium: 0,
          small: 1,
          xLarge: 1
        },
        businessPhoneNumber: '(604) 984-9101',
        id: '-KxZWhA2lpCruVPGtR7G',
        businessDescription: 'Edgemont Moving &amp; Storage Ltd'
      },
      {
        businessServiceArea: {
          'bc-burnaby': true,
          'bc-richmond': true,
          'bc-vancouver': true
        },
        businessHour: [
          {
            day: 'mon',
            endTime: 17,
            startTime: 8
          },
          {
            day: 'tue',
            endTime: 17,
            startTime: 8
          },
          {
            day: 'wed',
            endTime: 17,
            startTime: 8
          },
          {
            day: 'fri',
            endTime: 17,
            startTime: 8
          },
          {
            day: 'sat',
            endTime: 17,
            startTime: 8
          },
          {
            day: 'sun',
            endTime: 17,
            startTime: 8
          }
        ],
        logo: 'https://s3.amazonaws.com/vancouver-bbb/abpages2/images/smallimage61064-000-1228748.png',
        businessName: 'Paul&apos;s Moving and Labour Services Ltd.',
        businessImgs: [
          'https://s3.amazonaws.com/vancouver-bbb/abpages2/images/smallimage61064-000-1228748.png'
        ],
        vehiclesInfo: {
          large: 1,
          medium: 1,
          small: 0,
          xLarge: 0
        },
        businessPhoneNumber: '(778) 808-2398',
        id: '-KxZWhA3L9wolL0S3WlG',
        businessDescription: 'Paul&apos;s Moving and Labour Services Ltd.'
      }
    ]
};

export default withRouter(SearchResultTable);
