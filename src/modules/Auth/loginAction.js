export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const login = () => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  });
  setTimeout(() => {
    dispatch({
      type: LOGIN_SUCCESS
    });
  }, 1000);
};

