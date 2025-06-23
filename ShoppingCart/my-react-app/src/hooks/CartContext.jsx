import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ items }}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
