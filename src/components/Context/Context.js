import React, { useState, useEffect, createContext } from "react";
import { products as mainProductsList } from "../../lib/products";
import Container from "../Layout/Container/Container";
import Filter from "../Layout/Filter/Filter";
import Header from "../Layout/Header/Header";

export const MainContext = createContext();

const Context = (props) => {
  const [basketItems, setBasketItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    setProducts(mainProductsList);
    setBasketItems(JSON.parse(localStorage.getItem("basket")) || []);
  }, []);

  useEffect(() => {
    console.log(filterOptions);
    if (filterOptions.length > 0) {
      console.log("2");
      let filteredProducts = [...mainProductsList];
      filterOptions.map((option) => {
        filteredProducts = filteredProducts.filter(
          (x) => x[option.type] === option[option.type]
        );
      });
      setProducts([...filteredProducts]);
    } else {
      console.log("3");
      setProducts([...mainProductsList]);
    }
  }, [filterOptions]);

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
    filterOptions,
    setFilterOptions,
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
