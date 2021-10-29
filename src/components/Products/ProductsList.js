import React, { useContext, useEffect } from "react";
import { MainContext } from "../Context/Context";
import ProductCard from "./Product/ProductCard";
import "./ProductsList.scss";

const ProductsList = () => {
  const { products } = useContext(MainContext);

  return (
    <>
      {/* TODO: Productlar buraya gelicek ve map ile dönülüp her biri için ProductCard basılacak */}
      <div className="products-main-container">
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>

      {/* <ProductCard /> */}
    </>
  );
};

export default ProductsList;
