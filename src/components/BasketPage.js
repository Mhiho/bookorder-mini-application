import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeBook } from "../actions/selectBook";
import "../style/main.scss";
import Layout from '../hoc/Layout';

function BasketPage() {
  const selectedBooks = useSelector((state) => state.selectedBooks);
  const dispatch = useDispatch();
  return (
    <Layout>
      <div className="basket-container">
        {selectedBooks &&
        selectedBooks.selectedBooks &&
        selectedBooks.selectedBooks.length === 0 ? null : (
          <div>
            <Link to="/order">ZAMAWIAM I PŁACĘ</Link>
          </div>
        )}
        {selectedBooks &&
        selectedBooks.selectedBooks &&
        selectedBooks.selectedBooks.length === 0 ? (
          <div className="basket-empty-container">
            <h1>Nie wybrałeś żadnej książki</h1>
            <Link to="/">Powrót do sklepu</Link>
          </div>
        ) : (
          selectedBooks &&
          selectedBooks.selectedBooks &&
          selectedBooks.selectedBooks.map((book) => {
            return (
              <div
                key={`selected-books-${book.id}`}
                className="basket-one-book"
              >
                <h2>{book.title}</h2>
                <img src={book.cover_url} alt="okładka-koszyk" />
                <button onClick={() => dispatch(removeBook(book.id))}>
                  Usuń z koszyka
                </button>
              </div>
            );
          })
        )}
      </div>
    </Layout>
  );
}
export default BasketPage;
