import React from "react";
import Search from "../SearchBox/Search";
import Basket from "../Basket/Basket";
import "./Header.scss";
import VectorLogo from "../../../assets/logo/Vector.svg";
import DropDown from "../DropDown/DropDown";

export default function Header() {
  return (
    <>
      <div className="header" data-testid="header">
        <div className="logo-wrap">
          <img alt="vector logo" className="vector-logo" src={VectorLogo} />
        </div>
        <Search />
        <Basket />
      </div>
      <div className="product-wrapper">
        <div>
          <h3 className="product-name">iphone İOS cep telefonu</h3>
          <h4 className="product-search">
            Aranan kelime:<span className="product-answer">iphone 11</span>
          </h4>

          <div className="product-section">{/* <Dropdown />*/} </div>
        </div>
        <DropDown />
      </div>
    </>
  );
}
