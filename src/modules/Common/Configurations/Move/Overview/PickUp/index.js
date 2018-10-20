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
import { getPickUp } from '../../moveReducers';
import { loadPickUp } from '../../PickUp/actions';
import mapImmutablePropsToPlainProps from '../../../../mapImmutablePropsToPlainProps'

import PickUp from './PickUp';


export const validator = (detail) => has(detail, ['residenceType']) && has(detail, ['pickUpAccess']) && has(detail, ['pickUpJunkRemoval']) && has(detail, ['parkingLocation']);


const mapDispatchToProps = dispatch => ({
  loadPickUp: () => dispatch(loadPickUp())
});

const mapStateToProps = state => ({ pickUp: getPickUp(state) });
const notLoaded = props => isUndefined(props.pickUp) || props.pickUp.get('status') !== 'LOADED';

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadPickUp();
    }
  }),
  branch(notLoaded, renderNothing),
  mapImmutablePropsToPlainProps,
  withProps(props => ({
    isValid: validator(props.pickUp.detail)
  }))
);

export default enhance(PickUp);
