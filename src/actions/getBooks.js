import axios from "../axiosInstance";
export const FETCH_BOOKS = "FETCH_REPOS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getBooks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `book/`
      );
      dispatch({
        type: FETCH_BOOKS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_FAILURE,
      });
    }
  };
};
