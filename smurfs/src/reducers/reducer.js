import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  ADD_DATA,
  ADD_SUCCESS,
} from "../actions/index";

const initialState = {
  smurf: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
      };
    case ADD_DATA:
      return {
        ...state,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        smurf: [...action.payload],
      };
    default:
      return state;
  }
};
