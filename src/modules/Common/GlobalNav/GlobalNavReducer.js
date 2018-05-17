import Immutable from 'immutable';
import {
  TOGGLE_MENU_ACTIVE
} from './GlobalNavActions';

const initState = Immutable.fromJS({
  isMenuActive: false
});

const globalNav = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_MENU_ACTIVE: {
      return state.withMutations(st => {
        return st.set('isMenuActive', action.isActive);
      });
    }

    default:
      return state;
  }
};


export default globalNav;


// Selectors

export const isMenuActive = (state) => state.getIn(['common', 'globalNav', 'isMenuActive'])