import {
  ALL_COLLEGE_FAILURE,
  ALL_COLLEGE_REQUEST,
  ALL_COLLEGE_SUCCESS,
  COLLEGE_BRANCH_REQUEST,
  COLLEGE_BRANCH_SUCCESS,
  COLLEGE_BRANCH_FAILURE,
  CLEAR_ERROR
} from "../constants/collegeConstants";

// const initialData = {
//   colleges: [],
//   branches: [],
//   loading: false
// };

export const collegeListReducer = (state = { colleges: [] }, action) => {
  switch (action.type) {
    case ALL_COLLEGE_REQUEST:
      return {
        loading: true
      };
    case ALL_COLLEGE_SUCCESS:
      return {
        loading: false,
        colleges: action.payload
      };

    case ALL_COLLEGE_FAILURE:
      return {
        loading: false,
        error: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

export const BranchListReducer = (state = { branches: [] }, action) => {
  switch (action.type) {
    case COLLEGE_BRANCH_REQUEST:
      return {
        loading: true
      };
    case COLLEGE_BRANCH_SUCCESS:
      return {
        loading: false,
        branches: action.payload
      }
    case COLLEGE_BRANCH_FAILURE:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }

}
