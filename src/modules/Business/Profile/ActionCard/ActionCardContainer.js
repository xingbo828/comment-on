import React from 'react';
import { compose, branch, renderComponent, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import WithoutSearchParamsCard from './WithoutSearchParamsCard';
import WithSearchParamsCard from './WithSearchParamsCard';
import isLoggedIn from '../../../Common/isLoggedIn';

const EnhancedWithSearchParamsCard = compose(
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          cardDoneLoading: true
        });
      }, 1000)
    }
  }),
  isLoggedIn
)(WithSearchParamsCard);


const checkSearchParams = branch(
  props => true,
  renderComponent(EnhancedWithSearchParamsCard)
);

export default compose(
  withRouter,
  checkSearchParams
)(WithoutSearchParamsCard);
