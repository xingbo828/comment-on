import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Items from './Items';
import scrollToTopOnMount from '../../../Common/scrollToTopOnMount';

import {
  loadItems,
  localSaveItems
} from '../configurationActions';

import { getItems } from '../configurationReducers';


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
    form: 'mover.configurations.items',
    onSubmit: (values, dispatch, props) => {
      return localSaveItems(values.toJS());
    },
    onSubmitSuccess: async (result, dispatch, props) => {
      props.history.push({
        pathname: '/mover/configurations/overview',
        state: props.location.state
      });
    }
  }),
  withProps((props)=> ({
    goBack: (e) => {
      e.preventDefault();
      props.history.push({
        pathname: '/mover/configurations/logistics',
        state: props.location.state
      });
    }
  })),
  scrollToTopOnMount
);

export default enhance(Items);
