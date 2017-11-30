import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Items from './Items';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';

import {
  loadItems,
  localSaveItems
} from '../../searchActions';

import { getItems } from '../../searchReducers';


const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems())
});

const mapStateToProps = state => ({
  initialValues: getItems(state)
});

const isLoading = props => props.initialValues.get('status') !== 'LOADED';

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadItems();
    }
  }),
  branch(isLoading, renderNothing),
  reduxForm({
    form: 'search.configurations.items',
    onSubmit: (values, dispatch, props) => {
      return localSaveItems(values.toJS());
    },
    onSubmitSuccess: async (result, dispatch, props) => {
      props.history.push({
        pathname: '/business/search/configurations/overview',
        state: props.location.state
      });
    }
  }),
  withProps((props)=> ({
    goBack: (e) => {
      e.preventDefault();
      props.history.push({
        pathname: '/business/search/configurations/logistics',
        state: props.location.state
      });
    }
  })),
  scrollToTopOnMount
);

export default enhance(Items);
