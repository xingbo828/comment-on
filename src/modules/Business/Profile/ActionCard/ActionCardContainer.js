import React from 'react';
import { compose, branch, renderComponent, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import WithoutSearchParamsCard from './WithoutSearchParamsCard';
import WithSearchParamsCard from './WithSearchParamsCard';
import searchQueryValidator from '../../utils/searchQueryValidator';

const EnhancedWithSearchParamsCard = compose(
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          cardDoneLoading: true
        });
      },3000)
    }
  })
)(WithSearchParamsCard);


const checkSearchParams = branch(
  props => searchQueryValidator(props.location.search).status,
  renderComponent(EnhancedWithSearchParamsCard)
);

export default compose(
  withRouter,
  checkSearchParams
)(WithoutSearchParamsCard);
