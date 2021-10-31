import React, { useState, useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { MainContext } from "../../Context/Context";
// import Phone from "../../../assets/product-img/image 1.png";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { addToCart, basketItems } = useContext(MainContext);
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    let controlFlag =
      basketItems.filter((x) => x.productId === product.productId).length > 0;
    setIsDisabled(controlFlag);
  }, [basketItems]);

  return (
    <div className="card">
      <div className="card-image">
        <img
          className="img-fluid w-100 "
          src={"/" + product.image}
          alt="Cardimg"
        />
      </div>
      <div className="container-body text-center">
        {/* <h5>{props.name}</h5> */}
        {/* <p>{props.desc.replace(/(<([^>]+)>)/gi, "")}</p> */}
        <p className="desc">{product.desc}</p>
        <h4 className="product-names">
          Marka:<span className="product-answername">{product.brand}</span>
        </h4>
        <h4 className="product-names">
          Renk:<span className="product-answername">{product.color}</span>
        </h4>

        {/* <h3 className="text-danger mr-1">{props.price}</h3> */}
        <h3 className="price text-danger mr-1">{product.price} TL</h3>
        <h3 className="price-sale mr-1">
          <span className="first">{product.actualPrice} TL</span>
          <span className="sale">{" " + product.sale}</span>
        </h3>
        {/* <i className="fas fa-shopping-cart pr-2"></i>Add to cart */}
      </div>
      <button
        className="basket-button"
        disabled={isDisabled}
        data-testid={"add-to-cart-" + product.productId}
        onClick={() => addToCart(product)}
      >
        {isDisabled ? "Bu ürünü sepete ekleyemezsiniz." : "Sepete Ekle"}
      </button>
    </div>
  );
};

export default ProductCard;
