import React, { useContext } from "react";
import { MainContext } from "../Context/Context";
import ProductCard from "./Product/ProductCard";
import "./ProductsList.scss";

const ProductsList = () => {
  const { products, currentPage } = useContext(MainContext);

  // sets product count per page and which are showed
  const indexOfLastProduct = currentPage * 12;
  const indexOfFirstProduct = indexOfLastProduct - 12;
  return (
    <>
      {/* TODO: Productlar buraya gelicek ve map ile dönülüp her biri için ProductCard basılacak */}
      <div className="products-main-container" data-testid="product-list">
        {products
          .slice(indexOfFirstProduct, indexOfLastProduct)
          .map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
      </div>

      {/* <ProductCard /> */}
    </>
  );
};

export default ProductsList;
