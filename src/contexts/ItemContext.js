import { createContext, useState, useEffect } from "react";

//context
export const ItemContext = createContext();

const ItemProvider = ({ children }) => {
  //item states
  const [items, setItems] = useState([]);

  //item fetch from fakestoreapi
  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <ItemContext.Provider value={{ items }}>{children}</ItemContext.Provider>
  );
};

export default ItemProvider;
