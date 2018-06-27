import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderNothing,
  withProps
} from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import DateStep from './Date';
import scrollToTopOnMount from '../../../../Common/scrollToTopOnMount';
import validators, { validateFunc } from '../../../../Common/validators';
import isUndefined from 'lodash/isUndefined';
import { localSaveDate, loadDate } from './actions';

import { getDate } from '../moveReducers';

const validate = validateFunc(
  [
    {
      field: 'pickUpDate',
      validator: 'isRequired',
      message: 'Required'
    }
  ],
  validators
);

const mapDispatchToProps = dispatch => ({
  loadDate: () => dispatch(loadDate())
});

const mapStateToProps = state => ({ date: getDate(state) });


const notLoaded = props => {
  const isNotLoaded = isUndefined(props.date) || props.date.get('status') !== 'LOADED'
  return isNotLoaded
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.loadDate();
    }
  }),
  branch(notLoaded, renderNothing),
  withProps(props => ({
    initialValues: props.date.get('detail')
  })),
  reduxForm({
    form: 'configurations.move.date',
    validate,
    onSubmit: (values) => {
      return localSaveDate(values.toJS());
    },
    onSubmitSuccess: (result, dispatch, props) => {
      if (props.location.fromOverview) {
        return props.history.push({
          pathname: props.postEdit,
        });
      }
      // send user to next step
      props.history.push({
        pathname: props.next,
        state: props.location.state
      });
    }
  }),
  withProps(props => ({
    goBack: e => {
      e.preventDefault();
      props.history.push({
        pathname: props.previous,
        state: props.location.state
      });
    }
  })),
  scrollToTopOnMount
);

export default enhance(DateStep);
