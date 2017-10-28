import React from 'react';

const SearchResult = (props) => {
    return (
      <div><pre>{JSON.stringify(props.result, null, 2) }</pre></div>
    );
}

export default SearchResult;
