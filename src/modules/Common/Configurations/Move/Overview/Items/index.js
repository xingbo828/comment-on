import isUndefined from 'lodash/isUndefined';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderNothing
} from 'recompose';
import { getItems } from '../../moveReducers';
import Items from './Items';

import { loadItems } from '../../Items/actions';
import mapImmutablePropsToPlainProps from '../../../../mapImmutablePropsToPlainProps'

const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems())
});

const mapStateToProps = state => ({ items: getItems(state) });
const notLoaded = props => isUndefined(props.items) || props.items.get('status') !== 'LOADED';

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadItems();
    }
  }),
  branch(notLoaded, renderNothing),
  mapImmutablePropsToPlainProps
);

export default enhance(Items);
