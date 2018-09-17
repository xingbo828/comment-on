import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, setStatic, lifecycle, branch, renderNothing, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import Items from './Items';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import isUndefined from 'lodash/isUndefined';
import {
  loadItems,
  localSaveItems
} from './actions';

import { getItems } from '../moveReducers';


const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems())
});

const mapStateToProps = state => ({
  items: getItems(state)
});

const notLoaded = props => {
  const isNotLoaded = isUndefined(props.items) || props.items.get('status') !== 'LOADED'
  return isNotLoaded
};

const enhance = compose(
  setStatic('label', 'Moving items'),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadItems();
    }
  }),
  branch(notLoaded, renderNothing),
  withProps(props => ({
    initialValues: props.items.get('detail')
  })),
  reduxForm({
    form: 'configurations.move.items',
    onSubmit: (values, dispatch, props) => {
      return localSaveItems(values.toJS());
    },
    onSubmitSuccess: async (result, dispatch, props) => {
      if(props.location.fromOverview) {
        return props.history.push({
          pathname: props.postEdit
        });
      }
      props.history.push({
        pathname: props.next,
        state: props.location.state
      });
    }
  }),
  withProps((props)=> ({
    goBack: (e) => {
      e.preventDefault();
      props.history.push({
        pathname: props.previous,
        state: props.location.state
      });
    }
  })),
  scrollToTopOnMount
);

export default enhance(Items);
