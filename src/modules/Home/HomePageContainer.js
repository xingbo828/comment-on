import HomePage from './HomePage';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import { getBusinessList } from './homepageAction';
import validators, { validateFunc } from '../Common/validators';

const validate = validateFunc([{
  field: 'moveFrom',
  validator: 'isRequired',
  message: 'Required'
}, {
  field: 'moveTo',
  validator: 'isRequired',
  message: 'Required'
}] ,validators);

const mapDispatchToProps = dispatch => ({
  getBusinessList: (current, destination) => dispatch(getBusinessList(current, destination))
});

const enhanced = compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    form: 'homepage',
    onSubmit: (values, dispatch, props) => {
      console.log(values);
    },
    validate
  }),
);

export default enhanced(HomePage);

