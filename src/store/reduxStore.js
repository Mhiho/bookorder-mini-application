import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from "../reducers/booksReducer";
import { selectedBooks } from '../reducers/basketReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  books: booksReducer,
  selectedBooks: selectedBooks,
  form: formReducer,
});

export default function reduxStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
