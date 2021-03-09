import { CHOOSE_BOOK, REMOVE_BOOK } from "../actions/selectBook";
import update from "react-addons-update";

export const selectedBooks = (state = { selectedBooks: [] }, action) => {
  switch (action.type) {
    case CHOOSE_BOOK: 
    return {

      ...state,
      selectedBooks: [...state.selectedBooks, action.payload],
    }
          
    case REMOVE_BOOK:
      return {
        ...state,
        selectedBooks: state.selectedBooks.filter(
          (book) => book.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
