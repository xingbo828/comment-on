import React from 'react';
import SearchResult from '../../components/SearchResult';

const {Table} = SearchResult;

const Result = (props) => {
  console.log(props);
    return (
      <Table searchResult={props.result} />
    );
}

export default Result;
