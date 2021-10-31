import React, { useContext } from "react";
import { MainContext } from "../../Context/Context";
import "./Search.scss";

export default function Search() {
  const { setSearch } = useContext(MainContext);

  return (
    <input
      className="searchBox"
      type="text"
      id="searchBox"
      data-testid="searchBox"
      placeholder="24 milyon'dan fazla ürün içerisinden ara"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
