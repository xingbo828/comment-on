import HomePage from './HomePage';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import validators, { validateFunc } from '../Common/validators';
import { withRouter } from 'react-router-dom'

const validate = validateFunc([{
  field: 'moveFrom',
  validator: 'isRequired',
  message: 'Required'
}, {
  field: 'moveTo',
  validator: 'isRequired',
  message: 'Required'
},{
  field: 'moveDateTime',
  validator: 'isRequired',
  message: 'Required'
}] ,validators);


const enhanced = compose(
  withRouter,
  reduxForm({
    form: 'homepage',
    onSubmit: (values, dispatch, props) => {
      const formData = values.toJS();
      props.history.push({
        pathname: '/business/search',
        search: `?origin=${formData.moveFrom.placeId}&destination=${formData.moveTo.placeId}&dateTime=${formData.moveDateTime.unix()}`
      });
    },
    validate
  }),
);

export default enhanced(HomePage);

