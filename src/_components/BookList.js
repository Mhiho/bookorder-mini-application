import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../actions/getBooks";
import { chooseBook } from "../actions/selectBook";
import Book from "./Book";
import { Link } from "react-router-dom";
import "../style/main.scss";

function BookList() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const books = useSelector(
    (state) => state.books.books && state.books.books.data
  );
  const st = useSelector((state) => state);
  console.log(st);
  const narrowLeft = () => {
    id <= 0 ? setId(books.length - 1) : setId(id - 1);
  };
  const narrowRight = () => {
    id >= books.length - 1 ? setId(0) : setId(id + 1);
  };
  const selectFromDownPanel = (id) => setId(id);
  return (
    <>
      <div className="booklist-container">
        <Link to="/basket">
          <button className="basket-forward">Przejdź do koszyka</button>
        </Link>
      </div>
      {books && (
        <Book
          className="booklist-slide"
          title={books[id].title}
          cover={books[id].cover_url}
          author={books[id].author}
          pageNr={books[id].pages}
          onclick={() => dispatch(chooseBook(books[id]))}
        />
      )}
      <div className="booklist-arrows">
        <span className="booklist-left" onClick={() => narrowLeft()}>
          ←
        </span>
        <span className="booklist-right" onClick={() => narrowRight()}>
          →
        </span>
      </div>
      <div className="booklist-downpanel">
        {books &&
          books.map((book, index) => {
            return (
              <img
                key={`downpanel-${book.id}`}
                onClick={() => selectFromDownPanel(index)}
                className="booklist-downpanel-cover"
                src={book.cover_url}
                alt="downpanel-cover"
              />
            );
          })}
      </div>
    </>
  );
}

export default BookList;
