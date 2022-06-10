import { GET_CURRENCIES } from "../actions/actions";

const INITIAL_STATE = {
  currencies: [],
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_CURRENCIES:
      return { ...state, currencies: payload };
    default:
      return state;
  }
}
