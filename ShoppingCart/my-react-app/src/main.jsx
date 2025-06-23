// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";   // ⬅️  notice /client
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CartProvider } from "./hooks/CartContext.jsx";
// Grab the mount point
const rootElement = document.getElementById("root");

// Create the root *once* …
const root = ReactDOM.createRoot(rootElement);

// …and render your app into it
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
      <App />
      </CartProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);



 