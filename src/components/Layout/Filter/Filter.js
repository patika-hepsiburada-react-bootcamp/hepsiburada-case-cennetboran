import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { MainContext } from "../../Context/Context";
import "./Filter.scss";

const Filter = (props) => {
  const {
    products,
    filterOptions,
    setFilterOptions,
    setProducts,
    sortByPriceProducts,
    sortByDescriptionProducts,
  } = useContext(MainContext);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setFilterByColor();
    setFilterByBrand();
  }, [products]);

  const setFilterByColor = () => {
    let filteredByColor = [];
    products.map((item) => {
      if (filteredByColor.filter((x) => x.color === item.color).length <= 0) {
        filteredByColor.push({
          type: "color",
          color: item.color,
          count: 1,
        });
      } else {
        filteredByColor.filter((x) => x.color === item.color)[0].count += 1;
      }
    });
    setColors(filteredByColor);
  };

  const setFilterByBrand = () => {
    let filteredByBrand = [];
    products.map((item) => {
      if (filteredByBrand.filter((x) => x.brand === item.brand).length <= 0) {
        filteredByBrand.push({
          type: "brand",
          brand: item.brand,
          count: 1,
        });
      } else {
        filteredByBrand.filter((x) => x.brand === item.brand)[0].count += 1;
      }
    });
    setBrands(filteredByBrand);
  };

  const setFilters = (item) => {
    let options = [...filterOptions, item];
    setFilterOptions(options);
  };
  const removeFromFilters = (item) => {
    if (filterOptions.length > 0) {
      let newFilter = [...filterOptions];
      let ind = newFilter.findIndex((x) => x[item.type] === item[item.type]);
      newFilter.splice(ind, 1);
      console.log(newFilter);
      setFilterOptions([...newFilter]);
    }
  };

  return (
    <>
      <div className="filter-wrapper">
        <h4>Renk</h4>
        {colors.length > 0 &&
          colors.map((item) => {
            if (
              filterOptions.filter((x) => x.color === item.color).length > 0
            ) {
              return (
                <span className="filter-item">
                  <button
                    className="remove-filter-button"
                    onClick={() => removeFromFilters(item)}
                  >
                    x
                  </button>
                  {item.color}({item.count})
                </span>
              );
            } else {
              return (
                <span className="filter-item" onClick={() => setFilters(item)}>
                  {item.color}({item.count})
                </span>
              );
            }
          })}

        <h4>Sıralama</h4>
        <span
          className="filter-item"
          onClick={() => sortByPriceProducts("price", "asc")}
        >
          En Düşük Fiyat
        </span>
        <span
          className="filter-item"
          onClick={() => sortByPriceProducts("price", "desc")}
        >
          En Yüksek Fiyat
        </span>
        <span
          className="filter-item"
          onClick={() => sortByDescriptionProducts("desc", "asc")}
        >
          En Yeniler (A{">"}Z)
        </span>
        <span
          className="filter-item"
          onClick={() => sortByDescriptionProducts("desc", "desc")}
        >
          En Yeniler (Z{"<"}A)
        </span>

        <h4>Marka</h4>
        {brands.length > 0 &&
          brands.map((item) => {
            if (
              filterOptions.filter((x) => x.brand === item.brand).length > 0
            ) {
              return (
                <span className="filter-item">
                  <button
                    className="remove-filter-button"
                    onClick={() => removeFromFilters(item)}
                  >
                    x
                  </button>
                  {item.brand}({item.count})
                </span>
              );
            } else {
              return (
                <span className="filter-item" onClick={() => setFilters(item)}>
                  {item.brand}({item.count})
                </span>
              );
            }
          })}
      </div>
    </>
  );
};

export default Filter;
