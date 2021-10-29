import React, { useState, useEffect, createContext } from "react";
import { products } from "../../lib/products";
import Container from "../Layout/Container/Container";
import Filter from "../Layout/Filter/Filter";
import Header from "../Layout/Header/Header";

export const MainContext = createContext();

const Context = (props) => {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    setBasketItems(JSON.parse(localStorage.getItem("basket")) || []);
  }, []);

  const addToCart = (item) => {
    let tempCart = [...basketItems];
    tempCart.push(item);
    localStorage.setItem("basket", JSON.stringify(tempCart));
    setBasketItems(tempCart);
  };

  const removeFromCart = (index) => {
    let tempCart = [...basketItems];
    tempCart.splice(index, 1);
    localStorage.setItem("basket", JSON.stringify(tempCart));
    setBasketItems(tempCart);
  };

  const properties = {
    products,
    basketItems,
    setBasketItems,
    addToCart,
    removeFromCart,
  };
  return (
    <MainContext.Provider value={properties}>
      <Header />
      <Filter />
      <Container />
    </MainContext.Provider>
  );
};

export default Context;
