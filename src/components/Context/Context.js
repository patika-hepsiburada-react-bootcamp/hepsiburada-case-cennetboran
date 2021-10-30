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
  const [sortOption, setSortOption] = useState("normal");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsCount, setProductsCount] = useState();

  useEffect(() => {
    setProducts(mainProductsList);
    setBasketItems(JSON.parse(localStorage.getItem("basket")) || []);
  }, []);

  useEffect(() => {
    if (search !== "" && search.length > 2) {
      let searchedProducts = mainProductsList.filter((x) =>
        x.desc.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(searchedProducts);
    } else {
      setProducts(mainProductsList);
    }
  }, [search]);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

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

  const sortByPriceProducts = (by, type) => {
    let sortedArray = [];
    if (type === "asc") {
      setSortOption("leastPrice");
      sortedArray = products.sort(function (a, b) {
        return parseFloat(a[by]) - parseFloat(b[by]);
      });
    } else {
      setSortOption("highestPrice");
      sortedArray = products.sort(function (a, b) {
        return parseFloat(b[by]) - parseFloat(a[by]);
      });
    }
    setProducts([...sortedArray]);
  };

  const sortByDescriptionProducts = (by, type) => {
    let sortedArray = [];
    if (type === "asc") {
      setSortOption("AZ");
      sortedArray = products.sort((a, b) => {
        var descA = a[by].toLowerCase(),
          descB = b[by].toLowerCase();
        if (descA < descB) {
          return -1;
        }
        if (descA > descB) {
          return 1;
        }
        return 0;
      });
    } else {
      setSortOption("ZA");
      sortedArray = products.sort((a, b) => {
        var descA = a[by].toLowerCase(),
          descB = b[by].toLowerCase();
        if (descA < descB) {
          return 1;
        }
        if (descA > descB) {
          return -1;
        }
        return 0;
      });
    }
    setProducts([...sortedArray]);
  };

  const properties = {
    products,
    setProducts,
    basketItems,
    setBasketItems,
    addToCart,
    removeFromCart,
    filterOptions,
    setFilterOptions,
    sortOption,
    setSortOption,
    sortByDescriptionProducts,
    sortByPriceProducts,
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    productsCount,
    setProductsCount,
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
