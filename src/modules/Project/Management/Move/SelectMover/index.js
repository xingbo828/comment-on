import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import SelectMover from './SelectMover';
import validators, { validateFunc } from '../../../../Common/validators';
import { selectMover } from '../../managementAction';

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

const mapDispatchToProps = dispatch => ({
  selectMover: (projectId, providerId) => dispatch(selectMover(projectId, providerId))
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'project.management',
    validate,
    onSubmit: (values, dispatch, props) => {
      const { projectId } = props;
      const providerId = values.get('selectedMover');
      return props.selectMover(projectId, providerId);
    }
  })
);

export default enhance(SelectMover);
