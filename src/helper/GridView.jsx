import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function GridView({ item }) {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const inCart = (item) => {
    return !!cartItems.find((it) => it.id === item.id);
  };
  return (
    <li className="space-y-3">
      <div>
        <img className="rounded-md" src={item.src} alt={item.name} />
      </div>
      <div className="space-y-2">
        <div>{item.name}</div>
        <div className="text-gray-500">${item.price}</div>
      </div>
      {inCart(item) && (
        <button
          onClick={() => increase(item)}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
          type="button"
        >
          Add more
        </button>
      )}

      {!inCart(item) && (
        <button
          onClick={() => addProduct(item)}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
          type="button"
        >
          Add to bag
        </button>
      )}
    </li>
  );
}
