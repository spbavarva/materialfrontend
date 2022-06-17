import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { collegeListReducer,BranchListReducer } from "./reducers/collegeReducer";

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  collegesList: collegeListReducer,
  branchList : BranchListReducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
