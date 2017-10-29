import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import SearchResultItem from './Item';
import SearchResultTable from './Table';

const SearchResultItemDemo = withInfo('Search Result item')(() =>
<div style={{padding: '25px'}}>
  <SearchResultItem
    onClick={action('Click')}
    price={number('price', 259)}
    name={text('name', 'Moving Co.')}
    id={text('id', 'abc')}
    rate={number('rate', 3.5)}
    rateCount={number('rateCount', 6)}
    logo={text('logo', 'http://www.doggy-paradise.com/wp-content/uploads/2015/12/bg-1024x602.jpg')}
  />
  <SearchResultItem
    onClick={action('Click')}
    price={number('price', 259)}
    name={text('name', 'Moving Co.')}
    id={text('id', 'abc')}
    rate={number('rate', 3.5)}
    rateCount={number('rateCount', 6)}
    logo={text('logo', 'http://www.doggy-paradise.com/wp-content/uploads/2015/12/bg-1024x602.jpg')}
  />
</div>
);

const SearchResultDemo = withInfo('Search Result Table')(() =>
<div style={{padding: '25px'}}>
  <SearchResultTable>
  </SearchResultTable>
</div>
);


const SearchResultStory = storiesOf('Mover/Search/SearchResult', module)
.addDecorator(withKnobs)
.add('Search Result Item', SearchResultItemDemo)
.add('Search Result Table', SearchResultDemo);


export default SearchResultStory;
