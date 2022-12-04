import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from "./users/reducer";

// const DEFAULT_STATE = {
//   user: '',
//   albums: [],
//   selectedAlbum: {
//     id: 0,
//     title: '',
//     userId: 0
//   },
//   cards: [],
// }

export default createStore(
  combineReducers({
    user: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
)