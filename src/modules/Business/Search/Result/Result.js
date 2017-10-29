import React from 'react';
import SearchResult from '../../components/SearchResult';
import Grid from '../../../../globalComponents/Grid';

const { Container } = Grid;
const {Table} = SearchResult;

const Result = (props) => {
    return (
      <Container>
        <Table searchResult={props.result} />
      </Container>
    );
}

export default Result;
