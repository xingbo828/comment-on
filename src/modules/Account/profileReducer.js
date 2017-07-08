import Immutable from 'immutable';
import { UPDATE_PROFILE } from './profileAction';

const initState = Immutable.fromJS({
  status: 'UNINIT'
});

export default (state = initState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return state;
    default:
      return state;
  }
};
