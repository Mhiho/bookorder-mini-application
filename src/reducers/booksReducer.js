import { FETCH_FAILURE, FETCH_BOOKS } from "../actions/getBooks";

export const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        data: []
      }
    default:
      return state;
  }
};
