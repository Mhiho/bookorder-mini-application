export const CHOOSE_BOOK = 'CHOOSE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const chooseBook = (book) => {
    return {
        type: CHOOSE_BOOK,
        payload: book
    }
}
export const removeBook = (id) => {
    return {
        type: REMOVE_BOOK,
        payload: id
    }
}