import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from "../reducers/booksReducer";
import { selectedBooks } from '../reducers/basketReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  selectedBooks: selectedBooks,
});

export default function reduxStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
