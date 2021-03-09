import React from "react";
import { useSelector } from "react-redux";
import Layout from "../hoc/Layout";
import "../style/main.scss";
import Order from "../_components/form";

function OrderForm(props) {
  const selectedBooks = useSelector((state) => state.selectedBooks);
  const price =
    selectedBooks &&
    selectedBooks.selectedBooks.length !== 0 &&
    selectedBooks.selectedBooks
      .map((book) => book.book.price)
      .reduce((acc, curr) => acc + curr);
  return (
    <Layout>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Lista zakupionych książek</th>
            </tr>

            {selectedBooks &&
              selectedBooks.selectedBooks &&
              selectedBooks.selectedBooks.map((book, index) => {
                return (
                  <tr>
                    <td>{book.book.title}</td>
                    <td>
                      {selectedBooks &&
                        selectedBooks.selectedBooks.length !== 0 &&
                        `${book.book.price} PLN`}
                    </td>
                  </tr>
                );
              })}
            <tr className="order-line"></tr>
            <tr>
              <th>Suma zakupionych książek</th>
              <td>
                {selectedBooks &&
                  selectedBooks.selectedBooks.length !== 0 &&
                  `${price} PLN`}
              </td>
            </tr>
          </tbody>
        </table>
        <Order />
      </div>
    </Layout>
  );
}

export default OrderForm;
