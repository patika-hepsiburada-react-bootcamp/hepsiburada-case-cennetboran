import React, { useState } from "react";
import "./DropDown.scss";

const DropDown = (props) => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <>
      <select className="dropDown" onChange={(e) => handleSelected(e)}>
        <option value="" hidden disabled selected>
          Sıralama
        </option>
        <option
          className={selected === "leastPrice" ? "active" : ""}
          value="leastPrice"
        >
          En Düşük Fiyat
        </option>
        <option
          className={selected === "highestPrice" ? "active" : ""}
          value="highestPrice"
        >
          En Yüksek Fiyat
        </option>
        <option className={selected === "AZ" ? "active" : ""} value="AZ">
          En Yeniler (A{">"}Z)
        </option>
        <option className={selected === "ZA" ? "active" : ""} value="ZA">
          En Yeniler (Z{"<"}A
        </option>
      </select>
    </>
  );
};

export default DropDown;
