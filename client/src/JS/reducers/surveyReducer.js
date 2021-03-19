import { GET_SURVEY } from "../constants/actionTypes";

const intialState = {
  survey: [],
};

const surveyReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_SURVEY:
      return { ...state, survey: action.payload };
    default:
      return state;
  }
};

export default surveyReducer;
