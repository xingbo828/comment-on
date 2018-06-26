import isUndefined from 'lodash/isUndefined';
import has from 'lodash/has';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderNothing,
  withProps
} from 'recompose';
import { getLogistics } from '../../moveReducers';
import { loadLogistics } from '../../Logistics/actions';
import mapImmutablePropsToPlainProps from '../../../../mapImmutablePropsToPlainProps'

import Logistics from './Logistics';


export const validator = (detail) => has(detail, ['residenceType']) && has(detail, ['deliveryAccess']) && has(detail, ['pickUpAccess']);


const mapDispatchToProps = dispatch => ({
  loadLogistics: () => dispatch(loadLogistics())
});

const mapStateToProps = state => ({ logistics: getLogistics(state) });
const notLoaded = props => isUndefined(props.logistics) || props.logistics.get('status') !== 'LOADED';

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadLogistics();
    }
  }),
  branch(notLoaded, renderNothing),
  mapImmutablePropsToPlainProps,
  withProps(props => ({
    isValid: validator(props.logistics.detail)
  }))
);

export default enhance(Logistics);
