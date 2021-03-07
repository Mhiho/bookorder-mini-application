import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from '../actions/getBooks';


function BookList(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getBooks())
    },[])

    const books = useSelector(state=> state)
    console.log(books)
    return(
        <>
        </>
    )

}

export default BookList;