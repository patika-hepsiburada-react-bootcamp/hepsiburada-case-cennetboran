import "./Basket.scss";
import { useState } from "react";

export default function Basket() {
  const [basket, setBasket] = useState(false);
  return (
    <>
      <input
        className="basket"
        type="button"
        value="Sepetim"
        onClick={() => setBasket((prev) => !prev)}
      />
      {basket && <div>Açıldııı</div>}
    </>
  );
}
