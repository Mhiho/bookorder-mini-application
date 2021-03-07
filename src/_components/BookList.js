import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../actions/getBooks";
import Book from "./Book";

function BookList() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const books = useSelector(
    (state) => state.books.data && state.books.data.data
  );
  const narrowLeft = () => {
    id <= 0 ? setId(books.length - 1) : setId(id - 1);
  };
  const narrowRight = () => {
    id >= books.length-1 ? setId(0) : setId(id + 1);
  };
  const selectFromDownPanel = (id) => setId(id);
  return (
    <>
      {books && (
        <Book
          className="booklist-slide"
          title={books[id].title}
          cover={books[id].cover_url}
          author={books[id].author}
          pageNr={books[id].pages}
        />
      )}
      <span className="booklist-left" onClick={() => narrowLeft()}>
        ←
      </span>
      <span className="booklist-right" onClick={() => narrowRight()}>
        →
      </span>
      <div className='booklist-downpanel'>
        {
            books && books.map((book,index)=>{
                return (
                    <img onClick={()=>selectFromDownPanel(index)} className='booklist-downpanel-cover' src={book.cover_url} alt='downpanel-cover' />
                )
            })
        }
      </div>
    </>
  );
}

export default BookList;
