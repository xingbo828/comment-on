// import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import SelectMover from './SelectMover';
import validators, { validateFunc } from '../../../../Common/validators';

const validate = validateFunc(
  [
    {
      field: 'selectedMover',
      validator: 'isRequired',
      message: 'Required'
    }
  ],
  validators
);

const enhance = compose(
  // withRouter,
  // connect(null, mapDispatchToProps),
  reduxForm({
    form: 'project.management',
    validate,
    onSubmit: (values, dispatch, props) => {
      // return props.addMover(values.toJS());
    },
    onSubmitSuccess: (value, dispatch, props) => {
      // props.history.push({
      //   pathname: `/mover/edit/crew-member`
      // });
    },
    onSubmitFail: (errors, dispatch, submitError) => {
      // message.error(submitError.message, 10);
    }
  })
);

export default enhance(SelectMover);
