import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from "./users/reducer";
import { albumReducer } from "./albums/reducer";

export default createStore(
  combineReducers({
    user: userReducer,
    album: albumReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)