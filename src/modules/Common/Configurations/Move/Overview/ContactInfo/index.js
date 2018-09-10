import isUndefined from 'lodash/isUndefined';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty'
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderNothing,
  withProps
} from 'recompose';
import { getContactInfo } from '../../moveReducers';
import ContactInfo from './ContactInfo';
import { loadContactInfo } from '../../ContactInfo/actions';
import mapImmutablePropsToPlainProps from '../../../../mapImmutablePropsToPlainProps'

const validator = detail => !isEmpty(get(detail, ['name'])) && !isEmpty(get(detail, ['email']));

const mapDispatchToProps = dispatch => ({
  loadContactInfo: () => dispatch(loadContactInfo())
});

const mapStateToProps = state => ({ contactInfo: getContactInfo(state) });
const notLoaded = props => isUndefined(props.contactInfo) || props.contactInfo.get('status') !== 'LOADED';

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadContactInfo();
    }
  }),
  branch(notLoaded, renderNothing),
  mapImmutablePropsToPlainProps,
  withProps(props => ({
    isValid: validator(props.contactInfo.detail)
  }))
);

export default enhance(ContactInfo);
