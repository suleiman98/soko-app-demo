const store = (cartItems) => {
  window.localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumCartItems = (cartItems) => {
  store(cartItems);
  let countLogic = cartItems.reduce((acc, item) => acc + item.qty, 0);
  let total = cartItems
    .reduce((acc, item) => {
      return acc + item.qty * item.price;
    }, 0)
    .toFixed(2);
  return {
    countLogic,
    total,
  };
};

export function CartReducer(state, action) {
  if (action.type === "addProduct") {
    const newItem = !state.cartItems.find(
      (item) => item.id === action.product.id
    );
    if (newItem) {
      state.cartItems.push({ ...action.product, qty: 1 });
    }

    return {
      ...state,
      ...sumCartItems(state.cartItems),
      cartItems: [...state.cartItems],
    };
  } else if (action.type === "removeProduct") {
    let prod = state.cartItems.filter((item) => item.id !== action.product.id);
    return {
      ...state,
      ...sumCartItems(prod),
      cartItems: [...prod],
    };
  } else if (action.type === "increase") {
    state.cartItems[
      state.cartItems.findIndex((item) => item.id === action.product.id)
    ].qty++;
    return {
      ...state,
      ...sumCartItems(state.cartItems),
      cartItems: [...state.cartItems],
    };
  } else if (action.type === "decrease") {
    state.cartItems[
      state.cartItems.findIndex((item) => item.id === action.product.id)
    ].qty--;
    return {
      ...state,
      ...sumCartItems(state.cartItems),
      cartItems: [...state.cartItems],
    };
  } else if (action.type === "checkout") {
    return {
      cartItems: [],
      checkout: true,
      ...sumCartItems([]),
    };
  } else if (action.type === "clear") {
    return {
      cartItems: [],
      ...sumCartItems([]),
    };
  } else {
    return state;
  }
}
