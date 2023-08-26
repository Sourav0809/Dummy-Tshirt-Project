import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./Components/Store/ProductProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <App />
  </ProductProvider>
);
