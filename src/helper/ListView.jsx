import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ListView({ item, w, h }) {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const inCart = (item) => {
    return !!cartItems.find((it) => it.id === item.id);
  };
  return (
    <li className="flex rounded-xl">
      <div>
        <img
          className={` w-${w} h-${h} object-cover rounded-md`}
          src={item.src}
          alt={item.name}
        />
      </div>
      <div className=" ml-4 space-y-3 w-full">
        <div className="text-lg">{item.name}</div>
        <div className="text-md text-gray-500">${item.price}</div>
        <div className="flex justify-end">
          {inCart(item) && (
            <button
              onClick={() => increase(item)}
              className="hover:bg-gray-200 flex place-items-center rounded-full p-4"
            >
              <svg
                className="w-9 h-9 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          )}

          {!inCart(item) && (
            <button
              onClick={() => addProduct(item)}
              className="hover:bg-gray-200 flex place-items-center rounded-full p-4"
            >
              <svg
                className="w-9 h-9 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </li>
  );
}
