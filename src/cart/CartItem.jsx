import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ product, w, h }) {
  const { increase, decrease, removeProduct } = useContext(CartContext);
  return (
    <li class="flex rounded-xl">
      <div>
        <img
          className={` w-${w} h-${h} object-cover rounded-md`}
          src={product.src}
          alt={product.name}
        />
      </div>
      <div className=" ml-4 space-y-3 w-full">
        <div className="text-lg">{product.name}</div>
        <div className="text-md text-gray-500">${product.price}</div>
        <div className="">{product.qty}</div>
        <div className="flex justify-end">
          <button
            onClick={() => increase(product)}
            className="hover:bg-gray-200 flex place-items-center rounded-full p-4"
          >
            <svg
              className="w-8 h-8 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>

          {product.qty > 1 && (
            <button
              onClick={() => decrease(product)}
              className="hover:bg-gray-200 flex place-items-center rounded-full p-4"
            >
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
          )}

          {product.qty === 1 && (
            <button
              onClick={() => removeProduct(product)}
              className="hover:bg-gray-200 flex place-items-center rounded-full p-4"
            >
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </li>
  );
}
