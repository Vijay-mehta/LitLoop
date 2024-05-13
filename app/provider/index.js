'use client'
import { useState } from "react";
import { storeContext } from "../context";

const StoreProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <storeContext.Provider value={{ cartData, setCartData }}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreProvider;
