import React, { useState, useContext } from "react";
import { MainContext } from "../../Context/Context";
import "./Search.scss";

export default function Search() {
  const { search, setSearch } = useContext(MainContext);

  return (
    <>
      <div>
        <input
          className="searchBox"
          type="text"
          placeholder="24 milyon'dan fazla ürün içerisinden ara"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
}
