import Immutable from 'immutable';
import { type } from './loginAction';

export default (state = Immutable.fromJS({}), action) => {
  switch (action.type) {
    case type:
      return state.set('name', 'Bo');
    default:
      return state;
  }
};