export const GET_CURRENCIES = "GET_CURRENCIES";

export const get_currencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const get_cur_thunk = (resp) => {
  return function (dispatch) {
    dispatch(get_currencies(resp));
  };
};
