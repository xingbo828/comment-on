


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
import { getAddresses } from '../../moveReducers';
import { loadAddresses } from '../../Address/actions';
import mapImmutablePropsToPlainProps from '../../../../mapImmutablePropsToPlainProps'

import Address from './Address';


export const validator = (detail) => has(detail, ['pickUpAddress']) && has(detail, ['deliveryAddress']);


const mapDispatchToProps = dispatch => ({
  loadAddresses: () => dispatch(loadAddresses())
});

const mapStateToProps = state => ({ addresses: getAddresses(state) });
const notLoaded = props => { console.log(props); return isUndefined(props.addresses) || props.addresses.get('status') !== 'LOADED'};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadAddresses();
    }
  }),
  branch(notLoaded, renderNothing),
  mapImmutablePropsToPlainProps,
  withProps(props => ({
    isValid: validator(props.addresses.detail)
  }))
);

export default enhance(Address);
