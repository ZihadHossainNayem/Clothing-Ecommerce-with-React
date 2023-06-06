import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ItemProvider from "./contexts/ItemContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ItemProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ItemProvider>
    </CartProvider>
  </SidebarProvider>
);
