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
      .map((book) => book.price)
      .reduce((acc, curr) => acc + curr);
  return (
    <Layout>
      <div>
        <table>
          <tr>
            <th>Lista zakupionych książek</th>
          </tr>

          {selectedBooks &&
            selectedBooks.selectedBooks &&
            selectedBooks.selectedBooks.map((book, index) => {
              return (
                <tr>
                  <td>{book.title}</td>
                  <td>{selectedBooks &&
                selectedBooks.selectedBooks.length !== 0 && `${book.price} PLN`}</td>
                </tr>
              );
            })}
              <div className='order-line'></div>
          <tr>
            <th>Suma zakupionych książek</th>
            <td>
              {selectedBooks &&
                selectedBooks.selectedBooks.length !== 0 &&
                `${price} PLN`}
            </td>
          </tr>
        </table>
        <Order />
      </div>
    </Layout>
  );
}

export default OrderForm;
