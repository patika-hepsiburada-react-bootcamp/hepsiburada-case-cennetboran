import React, { useState, useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { MainContext } from "../../Context/Context";
import { createPortal } from "react-dom";
import "./Basket.scss";

export default function Basket() {
  const { basketItems, removeFromCart } = useContext(MainContext);
  const [isBasketVisible, setIsBasketVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemIndex, setItemIndex] = useState();

  useEffect(() => {
    setItems(basketItems);
  }, [basketItems]);

  const openModal = (index) => {
    setItemIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <div onMouseLeave={() => setIsBasketVisible(false)}>
        <button
          className="basket"
          type="button"
          onMouseEnter={() => setIsBasketVisible(true)}
        >
          <span className="cart-text">Sepetim</span>
          <span className="cart-badge">{items.length}</span>
        </button>
        {
          <div
            className={
              isBasketVisible ? "basket-opened" : "not-visible basket-opened"
            }
          >
            <ul>
              {items.length > 0 &&
                items.map((item, index) => {
                  return (
                    <li key={item.productId}>
                      <div className="cart-product-wrapper">
                        <div>
                          <img
                            className="cart-product-image"
                            src={item.image}
                            alt="product-thumbnail"
                          />
                        </div>
                        <div className="product-info-wrapper">
                          <div className="product-desc">
                            <p>{item.desc}</p>
                          </div>
                          <div className="delete-wrapper">
                            <button
                              className="delete-button"
                              onClick={() => {
                                openModal(index);
                              }}
                            >
                              <span>Kaldır</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        }
        {isModalOpen && (
          <div id="delete-modal">
            <div>
              <h1>Ürünü silmek istediğinize emin misiniz ?</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentiall....
              </p>
              <div className="modal-buttons">
                <button
                  className="modal-no-button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Hayır
                </button>
                <button
                  className="modal-yes-button"
                  onClick={() => {
                    removeFromCart(itemIndex);
                    setIsModalOpen(false);
                  }}
                >
                  Evet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}