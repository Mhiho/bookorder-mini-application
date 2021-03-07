import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from "../reducers/booksReducer";

const rootReducer = combineReducers({
  books: booksReducer,
});

export default function reduxStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
