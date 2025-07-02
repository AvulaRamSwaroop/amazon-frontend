import React, { createContext, useContext, useReducer } from "react";

// Initial state with everyone as admin
const initialState = {
  user: {
    name: "Admin User",
    role: "admin",
    token: "mocked-token", // You can use a dummy token or real token if needed
  },
  cart: {
    items: [],
  },
  products: [],
  orders: [],
};

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CART_ITEMS":
      return { ...state, cart: { ...state.cart, items: action.payload } };
    case "ADD_TO_CART":
      // Implement add to cart logic
      return state;
    // Add other actions as needed
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
