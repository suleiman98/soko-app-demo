import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="space-y-4">
      {cartItems.map((prod) => (
        <CartItem key={prod.id} w="72" h="40" product={prod} />
      ))}
    </div>
  );
}
