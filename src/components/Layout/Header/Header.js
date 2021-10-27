import Search from "../SearchBox/Search";
import Basket from "../Basket/Basket";
import "./Header.scss";
import VectorLogo from "../../../assets/logo/Vector.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-wrap">
          <img alt="vector logo" className="vector-logo" src={VectorLogo} />

          <Basket />
        </div>
      </header>
      <div className="productWrapper">
        <div className="productSection">
          <h3>
            {" "}
            <Search />
          </h3>
        </div>{" "}
        {/* <Dropdown /> */}
      </div>
    </>
  );
}
