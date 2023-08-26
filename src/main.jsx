import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./Components/Store/ProductProvider.jsx";
import CartProvider from "./Components/Store/CartProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </CartProvider>
);
