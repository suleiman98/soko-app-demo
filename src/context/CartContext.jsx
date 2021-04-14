import React, { createContext, useReducer } from "react";
import { CartReducer, sumCartItems } from "./CartReducer";

export const CartContext = createContext();

const storage = window.localStorage.getItem("cart")
  ? JSON.parse(window.localStorage.getItem("cart"))
  : [];
const initialState = {
  cartItems: storage,
  ...sumCartItems(storage),
  checkout: false,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (product) => dispatch({ type: "increase", product });
  const decrease = (product) => dispatch({ type: "decrease", product });
  const addProduct = (product) => dispatch({ type: "addProduct", product });
  const removeProduct = (product) =>
    dispatch({ type: "removeProduct", product });
  const clearCart = () => dispatch({ type: "clear" });
  const handleCheckOut = () => dispatch({ type: "checkout" });

  const contextValues = {
    increase,
    decrease,
    addProduct,
    removeProduct,
    clearCart,
    handleCheckOut,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
