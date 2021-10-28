import React, { useState } from "react";
import "./Search.scss";

export default function Search() {
  const [search, setSearch] = useState("");

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
