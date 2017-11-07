import React from 'react';
import SearchResult from '../../components/SearchResult';
import Grid from '../../../../globalComponents/Grid';

const { Container } = Grid;
const {Table} = SearchResult;

const Result = ({result, location}) => {
  // const handleOnItemClick = (businessId) => {
  //   history.push({
  //     pathname: `/business/profile/${businessId}`,
  //     search: location.search
  //   });
  // };
    return (
      <Container>
        <Table searchResult={result} searchParams={location.search}  />
      </Container>
    );
}

export default Result;
