import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { MainContext } from "../../../Context/Context";
import "../Container.scss";
import "./Pagination.scss";

export default function Pagination() {
  const {
    products,
    currentPage,
    setCurrentPage,
    productsCount,
    setProductsCount,
  } = useContext(MainContext);
  const [totalPages, setTotalPages] = useState([1]);

  useEffect(() => {
    setProductsCount(products.length);
  }, [products]);

  useEffect(() => {
    let tempArray = [];
    for (let i = 0; i < Math.ceil(productsCount / 12); i++) {
      tempArray.push(i + 1);
    }
    setTotalPages(tempArray);
  }, [productsCount]);

  return (
    <nav>
      {console.log(totalPages)}
      <ul className="pagination">
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            } else {
              return;
            }
          }}
        >
          &lt;
        </button>
        {totalPages.map((number) => (
          <li key={number}>
            <button
              onClick={() => {
                setCurrentPage(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
        <button
          onClick={() => {
            if (currentPage < totalPages.length) {
              setCurrentPage(currentPage + 1);
            } else {
              return;
            }
          }}
        >
          &gt;
        </button>
      </ul>
    </nav>
  );
}
