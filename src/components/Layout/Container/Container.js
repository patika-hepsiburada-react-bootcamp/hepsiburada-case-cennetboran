import React, { useContext, useState } from "react";
import ProductsList from "../../Products/ProductsList";
import "./Container.scss";

const Container = (props) => {
  const [container, setContainer] = useState(false);

  return (
    // TODO: Product listesi contexten buraya gelicek ve productList e gönderilecek.
    <>
      <ProductsList />
    </>
  );
};

export default Container;
