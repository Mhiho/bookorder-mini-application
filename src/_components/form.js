import React from "react";
import { useForm } from "react-hook-form";
import "../style/main.scss";
import axios from '../axiosInstance';
import { useSelector } from 'react-redux';

function Order() {
  const { selectedBooks } = useSelector(state=> state.selectedBooks)
  const order = selectedBooks.map(b=> { return{id: b.id, quantity: b.quantity}});
  console.log(order)
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    axios({
        method: 'post',
        url: '/order',
        data: {
            order: order,
            first_name: data.first_name,
            last_name: data.last_name,
            city: data.city,
            zip_code: data.zip_code
        }
    })    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="first_name">Imię</label>
      <input
        name="first_name"
        placeholder="Wpisz imię"
        ref={register({
          validate: (value) => value.length > 3 && value.length < 20,
        })}
      />
      {errors.first_name && (
        <p>Imię nie może być krótsze niż 3 i dłuższe niż 20 znaków.</p>
      )}

      <label htmlFor="last_name">Nazwisko</label>
      <input
        name="last_name"
        placeholder="Wpisz nazwisko"
        ref={register({
          validate: (value) => value.length > 2 && value.length < 20,
        })}
      />
      {errors.last_name && (
        <p>Nazwisko nie może być krótsze niż 3 i dłuższe niż 20 znaków</p>
      )}

     

      <label htmlFor="city">Miejscowość</label>
      <input
        name="city"
        placeholder="Wpisz miejscowość"
        ref={register({
          validate: (value) => value.length < 20 && value.length > 2,
        })}
      />
      {errors.city && (
        <p>Miejscowość nie może być któtsza niż 3 ani dłuższe niż 20 znaków</p>
      )}
      <label htmlFor="zip_code">Kod pocztowy</label>
      <input
        name="zip_code"
        placeholder="Wpisz kod pocztowy"
        ref={register({
          validate: (value) => value !== "",
        })}
      />
      {errors.zip_code && <p>Wpisz kod pocztowy.</p>}
      <input type="submit" value="ZAMAWIAM I PŁACĘ" />
    </form>
  );
}
export default Order;
