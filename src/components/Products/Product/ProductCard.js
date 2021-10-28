import React, { useState } from "react";

const ProductCard = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <div className="col-lg-4 col-md-6 col-12  mb-3">
        <div className="container ">
          <img
            className="img-fluid w-100 "
            src={props.image}
            alt="Sample"
            className="img-fluid "
          />

          <div className="container-body text-center">
            <h5>{props.name}</h5>
            <p>{props.desc.replace(/(<([^>]+)>)/gi, "")}</p>

            <h3 className="text-danger mr-1">{props.price}</h3>

            <button
              type="button"
              className="btn btn-primary btn-sm mr-1 mb-2"
              disabled={isDisabled}
              onClick={() => props.addToCart(props.id, 1)}
            >
              <i className="fas fa-shopping-cart pr-2"></i>Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
