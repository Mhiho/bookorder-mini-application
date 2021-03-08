import React from "react";
import { useForm } from "react-hook-form";
import "../style/main.scss";

function Order() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">Imię</label>
      <input
        name="firstName"
        placeholder="Wpisz imię"
        ref={register({
          validate: (value) => value.length > 3 && value.length < 20,
        })}
      />
      {errors.firstName && (
        <p>Imię nie może być krótsze niż 3 i dłuższe niż 20 znaków.</p>
      )}

      <label htmlFor="lastName">Nazwisko</label>
      <input
        name="lastName"
        placeholder="Wpisz nazwisko"
        ref={register({
          validate: (value) => value.length > 2 && value.length < 20,
        })}
      />
      {errors.lastName && (
        <p>Nazwisko nie może być krótsze niż 3 i dłuższe niż 20 znaków</p>
      )}

      <label htmlFor="email">Email</label>
      <input
        name="email"
        placeholder="Wpisz email"
        type="email"
        ref={register({
          validate: (value) => {
            const adres = /\S+@\S+\.\S+/;
            return adres.test(value);
          },
        })}
      />
      {errors.email && <p>Wprowadź poprawny email</p>}

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
      <label htmlFor="postalCode">Kod pocztowy</label>
      <input
        name="postalCode"
        placeholder="Wpisz kod pocztowy"
        ref={register({
          validate: (value) => value !== "",
        })}
      />
      {errors.postalCode && <p>Wpisz kod pocztowy.</p>}
      <input type="submit" value="ZAMAWIAM I PŁACĘ" />
    </form>
  );
}
export default Order;
