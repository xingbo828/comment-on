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
import { getDelivery } from '../../moveReducers';
import { loadDelivery } from '../../Delivery/actions';
import mapImmutablePropsToPlainProps from '../../../../mapImmutablePropsToPlainProps'

import Delivery from './Delivery';


export const validator = (detail) => has(detail, ['residenceType']) && has(detail, ['deliveryAccess']);


const mapDispatchToProps = dispatch => ({
  loadDelivery: () => dispatch(loadDelivery())
});

const mapStateToProps = state => ({ delivery: getDelivery(state) });
const notLoaded = props => isUndefined(props.delivery) || props.delivery.get('status') !== 'LOADED';

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadDelivery();
    }
  }),
  branch(notLoaded, renderNothing),
  mapImmutablePropsToPlainProps,
  withProps(props => ({
    isValid: validator(props.delivery.detail)
  }))
);

export default enhance(Delivery);
