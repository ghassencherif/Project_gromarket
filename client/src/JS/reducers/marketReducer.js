import { GET_MARKETS } from "../constants/actionTypes";

const intialState = {
  markets: [],
};

const marketReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_MARKETS:
      return { ...state, markets: action.payload };

    default:
      return state;
  }
};

export default marketReducer;
