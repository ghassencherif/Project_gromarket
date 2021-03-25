import { GET_BOYS, GET_BOY } from "../constants/actionTypes";

const intialState = {
  boys: [],
  boy: {
    survey: [],
    images: [],
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  },
};

const boysReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_BOYS:
      return { ...state, boys: action.payload };
    case GET_BOY:
      return { ...state, boy: action.payload[0] };
    default:
      return state;
  }
};

export default boysReducer;
