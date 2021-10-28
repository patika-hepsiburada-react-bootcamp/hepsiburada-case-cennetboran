import React from "react";
import "./Filter.scss";

const Filter = (props) => {
  return (
    <>
      <div className="filter-wrapper">
        <h4>Renk</h4>
        <span className="filter-item">Kırmızı</span>
        <span className="filter-item">Lacivert</span>
        <span className="filter-item">Sarı</span>
        <span className="filter-item">Siyah</span>
        <span className="filter-item">Beyaz</span>
        <h4>Sıralama</h4>
        <span className="filter-item">En Düşük Fiyat</span>
        <span className="filter-item">En Yüksek Fiyat</span>
        <span className="filter-item">En Yeniler (A{">"}Z)</span>
        <span className="filter-item">En Yeniler (Z{"<"}A)</span>
        <h4>Marka</h4>
        <span className="filter-item">Samsung</span>
        <span className="filter-item">Nokia</span>
        <span className="filter-item">Apple</span>
        <span className="filter-item">LG</span>
        <span className="filter-item">Huawei</span>
        <span className="filter-item">Xiaomi</span>
        <span className="filter-item">General Mobile</span>
      </div>
    </>
  );
};

export default Filter;
