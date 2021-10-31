import React from "react";
import ProductsList from "../../Products/ProductsList";
import Pagination from "../Container/Pagination/Pagination";
import "./Container.scss";

const Container = (props) => {
  return (
    // TODO: Product listesi contexten buraya gelicek ve productList e gönderilecek.
    <div data-testid="container">
      <ProductsList />
      <Pagination />
    </div>
  );
};

export default Container;
