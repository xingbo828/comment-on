import isUndefined from 'lodash/isUndefined';
import has from 'lodash/has'
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderNothing,
  withProps
} from 'recompose';
import { getDate } from '../../moveReducers';
import Date from './Date';
import { loadDate } from '../../Date/actions';
import mapImmutablePropsToPlainProps from '../../../../mapImmutablePropsToPlainProps'

export const validator = (detail) => has(detail, ['pickUpDate']) && has(detail, ['storage']);

const mapDispatchToProps = dispatch => ({
  loadDate: () => dispatch(loadDate())
});

const mapStateToProps = state => ({ date: getDate(state) });
const notLoaded = props => isUndefined(props.date) || props.date.get('status') !== 'LOADED';

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadDate();
    }
  }),
  branch(notLoaded, renderNothing),
  mapImmutablePropsToPlainProps,
  withProps(props => ({
    isValid: validator(props.date.detail)
  }))
);

export default enhance(Date);
