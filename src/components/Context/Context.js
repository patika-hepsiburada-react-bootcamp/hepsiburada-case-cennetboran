import React, { useState, useEffect, createContext } from "react";
import { products } from "../../lib/products";
import Container from "../Layout/Container/Container";
import Filter from "../Layout/Filter/Filter";
import Header from "../Layout/Header/Header";

export const MainContext = createContext();

const Context = (props) => {
  useEffect(() => {
    console.log(products);
  }, []);
  const properties = {
    products: products,
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
