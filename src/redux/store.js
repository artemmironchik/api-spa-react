import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from "./users/reducer";

export default createStore(
  combineReducers({
    user: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)