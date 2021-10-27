import "./Basket.scss";
import { useState } from "react";

export default function Basket() {
  const [basket, setBasket] = useState("");
  return (
    <>
      <input
        className="basket"
        type="button"
        value="Sepetim"
        onChange={(e) => setBasket(e.target.value)}
      />
    </>
  );
}
