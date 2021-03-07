import React, { useState } from "react";
import "../style/main.scss";

function Book(props) {
  return (
    <div className="book-container">
      <div className="book-item">
        <h3 className='book-item-title'>{props.title}</h3>
        <img src={props.cover} alt="cover" />
        <h4 className='book-item-author'>{`Autor: ${props.author}`}</h4>
        <h5 className='book-item-pageNr'>Liczba stron:{` ${props.pageNr}`}</h5>
      </div>
    </div>
  );
}
export default Book;
