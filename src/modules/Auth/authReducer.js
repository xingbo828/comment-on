import { type } from './authAction';

export default (state = {}, action) => {
  switch (action.type) {
    case type:
      return {
        ...state, 
        name: 'Bo'
      };
    default:
      return state;
  }
};